export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  avatar?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
