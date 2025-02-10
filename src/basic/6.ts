export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  address?: {
    city: string;
    country: string;
  };
}
