export interface User {
  id: 1;
  name: string;
  password: string;
  email: string;
}

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
}

export interface Param {
  name: string;
  personId: string;
}
