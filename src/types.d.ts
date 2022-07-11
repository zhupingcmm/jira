export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  token?: string;
}

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  pin: boolean;
}

export interface Param {
  name: string;
  personId: string;
}
