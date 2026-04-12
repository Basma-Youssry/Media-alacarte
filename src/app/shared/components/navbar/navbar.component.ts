import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
   selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

@Input() layoutType: 'main' | 'auth' = 'main';

menuOpen = false;

navLinks: { label: string; path: string }[] = [];

constructor(private router: Router) {}

ngOnInit(): void {
  this.setLinks();
}

private setLinks(): void {
  this.navLinks = this.layoutType === 'auth'
    ? [
        { label: 'Login', path: '/login' },
        { label: 'Register', path: '/register' }
      ]
    : [
        { label: 'The Platform', path: '/platform' },
        { label: 'Features', path: '/features' },
        { label: 'Benefits', path: '/benefits' },
        { label: 'Request a Demo', path: '/requestademo' },
        { label: 'Contact Us', path: '/contact-us' },
        { label: 'About Us', path: '/about-us' }
      ];
}

get showAuthButton(): boolean {
  return this.layoutType === 'main';
}

toggleMenu(): void {
  this.menuOpen = !this.menuOpen;
}
}