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
  personId: string;
  organization: string;
  pin: boolean;
}

export interface Param {
  name: string;
  personId: string;
}

// export interface AuthForm
