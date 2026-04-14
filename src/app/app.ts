import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { Topbar } from './layout/topbar/topbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, Topbar, MatSidenavModule],
  template: `
    <mat-sidenav-container style="height: 100vh;">
      <mat-sidenav mode="side" opened [style.width]="'240px'">
        <app-sidebar />
      </mat-sidenav>
      <mat-sidenav-content>
        <app-topbar />
        <main style="padding: 24px;">
          <router-outlet />
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: []
})
export class App {}
