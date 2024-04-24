import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { AboutComponent } from "../../components/about/about.component";
import { ServicesComponent } from "../../components/services/services.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ChatbotComponent } from "../../components/chatbot/chatbot.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeroComponent, AboutComponent, ServicesComponent, ProjectsComponent, ContactComponent, FooterComponent, ChatbotComponent]
})
export class HomeComponent {

}
