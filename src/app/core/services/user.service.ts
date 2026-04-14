import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class User {

  // Estado central de usuarios como BehaviorSubject
  private usersSubject = new BehaviorSubject<User[]>([
    {
      id: '1',
      name: 'Juan García',
      email: 'juan.garcia@example.com',
      role: 'admin',
      avatar: 'https://i.pravatar.cc/150?img=1',
      isActive: true,
      createdAt: new Date('2025-01-15'),
      updatedAt: new Date('2026-04-10')
    },
    {
      id: '2',
      name: 'María López',
      email: 'maria.lopez@example.com',
      role: 'user',
      avatar: 'https://i.pravatar.cc/150?img=2',
      isActive: true,
      createdAt: new Date('2025-02-20'),
      updatedAt: new Date('2026-04-08')
    },
    {
      id: '3',
      name: 'Carlos Mendez',
      email: 'carlos.mendez@example.com',
      role: 'user',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isActive: false,
      createdAt: new Date('2025-03-10'),
      updatedAt: new Date('2026-03-15')
    },
    {
      id: '4',
      name: 'Ana Vázquez',
      email: 'ana.vazquez@example.com',
      role: 'user',
      avatar: 'https://i.pravatar.cc/150?img=4',
      isActive: true,
      createdAt: new Date('2025-04-05'),
      updatedAt: new Date('2026-04-12')
    }
  ]);

  // Observable público (read-only)
  users$ = this.usersSubject.asObservable();

  // Método para obtener el valor actual de usuarios
  getUsers(): User[] {
    return this.usersSubject.getValue();
  }

  // Método para agregar un nuevo usuario
  addUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): void {
    const newUser: User = {
      ...user,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const current = this.usersSubject.getValue();
    this.usersSubject.next([...current, newUser]);
  }

  // Método para actualizar un usuario
  updateUser(id: string, updates: Partial<User>): void {
    const current = this.usersSubject.getValue();
    const updated = current.map(u => 
      u.id === id ? { ...u, ...updates, updatedAt: new Date() } : u
    );
    this.usersSubject.next(updated);
  }

  // Método para eliminar un usuario
  deleteUser(id: string): void {
    const current = this.usersSubject.getValue();
    this.usersSubject.next(current.filter(u => u.id !== id));
  }
}
