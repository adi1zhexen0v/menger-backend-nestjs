export class CreateUserWithOrganizationDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: 'student' | 'manager' | 'admin';
  organizationId: number;
  isActivated: boolean;
}