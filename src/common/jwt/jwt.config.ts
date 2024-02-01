import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleOptions = {
  global: true,
  secret: 'menger',
  signOptions: { expiresIn: '24h' },
};
