import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { CreateUserWithOrganizationDto } from './dto/create-user-with-organization.dto';
import { OrganizationsService } from '../organizations/organizations.service';
import { MailService } from 'src/services/mail.service';
import { hashPassword } from 'src/services/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    private organizationsService: OrganizationsService,
    private mailService: MailService,
    private jwtService: JwtService
  ) { }

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  getMe(token: string) {
    const decoded = this.jwtService.decode(token);
    return this.repository.createQueryBuilder('user')
      .leftJoinAndSelect('user.organization', 'organization')
      .leftJoinAndSelect('user.userCourses', 'userCourse')
      .leftJoinAndSelect('userCourse.course', 'course')
      .where('user.id = :userId', { userId: decoded.id })
      .getOne();
  }

  async updatePoints(userId: number, pointsToAdd: number) {
    const user = await this.repository.findOneBy({ id: userId });
    if (!user) {
      throw new Error('User not found');
    }

    user.points += pointsToAdd;
    await this.repository.save(user);
    return user;
  }

  activateUser(id: number) {
    return this.repository.update(id, { isActivated: true });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  findUsersByOrganization(id: number) {
    return this.repository.find({ where: { organizationId: id } })
  }

  delete(id: number) {
    return this.repository.delete({ id });
  }

  async createUserWithOrganization(dto: CreateUserWithOrganizationDto) {
    const organization = await this.organizationsService.findOne(dto.organizationId);
    const { password } = dto;
    const hashedPassword = await hashPassword(password);
    const user = await this.repository.save({
      ...dto,
      password: hashedPassword,
    });

    await this.mailService.sendUserCredentials(user.email, `${user.lastName} ${user.firstName}`, organization.name, password);
    return user;
  }
}
