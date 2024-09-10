import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { AboutComponent } from "../../components/about/about.component";
import { ServicesComponent } from "../../components/services/services.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ChatbotComponent } from "../../components/chatbot/chatbot.component";
import { ProjetService } from '../../services-api/projet.service';
import { error } from 'console';
import { PartenaireComponent } from "../../components/partenaire/partenaire.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeroComponent, AboutComponent, ServicesComponent, ProjectsComponent, ContactComponent, FooterComponent, ChatbotComponent, PartenaireComponent]
})
export class HomeComponent  {

   

    

}
