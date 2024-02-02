import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class StudentGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader: string = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Token is missing');
    }

    const token = authHeader.replace(/^Bearer\s/, '');
    if (!token) {
      throw new UnauthorizedException('Token is not valid');
    }

    console.log(token);

    try {
      const user = this.jwtService.verify(token);
      req.user = user;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Unauthorized user.' + error.message);
    }
  }
}