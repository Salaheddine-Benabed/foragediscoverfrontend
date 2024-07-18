import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forage-Discover-FRONTEND';

  constructor(private router: Router) {}

  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }


  logout() {
    // Implement your logout logic here, e.g., clearing tokens, etc.
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }


}
