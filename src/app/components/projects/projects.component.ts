import { Component, inject, OnInit } from '@angular/core';
import { ProjetService } from '../../services-api/projet.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  posts = [];

  private projetService = inject(ProjetService);
  private router = inject(Router);

  ngOnInit(): void {
    this.projetService.findAllProjets().subscribe({
      next: (projets) => {
        this.posts = projets;
        console.log('Liste projets ', this.posts);
      },
      error: (err) => console.log(err),
    });
  }

  goToDetails(projet: any) {
    this.router.navigate(['/details-projet'], { state: { projet: projet } });
  }
}
