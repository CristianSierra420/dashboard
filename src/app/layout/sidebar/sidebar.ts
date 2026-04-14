import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  template: `
    <div class="logo">
      <mat-icon>dashboard</mat-icon>
      <span>AdminPanel</span>
    </div>

    <mat-nav-list>
      @for (item of navItems; track item.path) {
        <a mat-list-item
           [routerLink]="item.path"
           routerLinkActive="active-link">
          <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
          <span matListItemTitle>{{ item.label }}</span>
        </a>
      }
    </mat-nav-list>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; height: 100%; background: white; }
    .logo {
      display: flex; align-items: center; gap: 10px;
      padding: 20px 16px; font-size: 18px; font-weight: 700;
      border-bottom: 1px solid #e0e0e0;
    }
    .active-link { background: rgba(63, 81, 181, 0.1); color: #3f51b5; border-radius: 4px; }
    .active-link mat-icon { color: #3f51b5; }
  `]
})
export class Sidebar {
  navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'bar_chart' },
    { label: 'Usuarios',  path: '/users',     icon: 'people'    },
    { label: 'Ventas',    path: '/sales',      icon: 'attach_money'},
    { label: 'Reportes',  path: '/reports',    icon: 'description'},
  ];
}
