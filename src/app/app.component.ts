import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatbotComponent } from "./components/chatbot/chatbot.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/admin/sidebar/sidebar.component";
import { DashComponent } from "./pages/admin/dash/dash.component";
import { AuthService } from './services-api/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NavbarComponent, RouterLink, RouterLinkActive, ChatbotComponent, FooterComponent, SidebarComponent, DashComponent]
})
export class AppComponent implements OnInit  {
  authservice = inject(AuthService)
  isAdmin = true;
  isLoggedIn = false;
  title = 'sama-tech';
  constructor(private activatedRoute: ActivatedRoute){}
  

  ngOnInit(): void {

  this.authservice.loggedInObs.subscribe({
    next:value=>{
      this.isLoggedIn = value
    }
  })


    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  jumpToSection(section: string | null) {
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
