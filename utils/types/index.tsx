export enum ServiceType {
  Admin = 'Admin',
  Employee = 'Employee',
  None = 'None'
}

export type IUserState = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  serviceType: ServiceType;
};