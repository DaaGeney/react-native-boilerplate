export enum ServiceType {
  Admin = 'Admin',
  Employee = 'Employee',
  None = 'None'
}

export type IUserState = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  serviceType: ServiceType;
  authToken: string;
};
