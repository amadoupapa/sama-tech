import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router:Router){}
  // navigateToSection(sectionId: string) {
  //   this.router.navigate([], { fragment: sectionId });
  // }
  // jumpToSection(section: string | null) {
  //   if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  // }
   
}
