import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UserTypes } from 'src/utils/enums';

@Injectable()
export class ManagerGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader: string = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Token is missing');
    }

    const token = authHeader.replace(/^Bearer\s/, '');
    if (!token) {
      throw new UnauthorizedException('Token is not valid');
    }

    try {
      const user = this.jwtService.verify(token);
      if (user.type !== UserTypes.MANAGER) {
        throw new UnauthorizedException('Access Denied: You are not manager');
      }
      req.user = user;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Unauthorized user.' + error.message);
    }
  }
}
