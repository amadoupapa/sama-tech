import { Component } from '@angular/core';
import { SidebarComponent } from "../../../components/admin/sidebar/sidebar.component";
import { HomeComponent } from "../../home/home.component";
import { HomeDashComponent } from "../../../components/admin/dash/home-dash/home-dash.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [SidebarComponent, HomeDashComponent,RouterLink],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss'
})
export class DashComponent {

  

}
