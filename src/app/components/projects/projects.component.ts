import { Component, inject, OnInit } from '@angular/core';
import { ProjetService } from '../../services-api/projet.service';
import { Router, RouterLink } from '@angular/router';
import { Alert } from '../../utils/alert';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  posts!:[];

  private projetService = inject(ProjetService);
  private router = inject(Router);

  isLoading = true

  ngOnInit(): void {
    this.projetService.findAllProjets()
    
    
    .pipe(
      finalize(() => {
        this.isLoading = false; // Désactiver le loader après la requête
      })
    )
    .subscribe({
      next: (projets) => {
        this.posts = projets;
        console.log('Liste projets ', this.posts);
        this.isLoading = false;
      },
       error:err=>{
        console.log(err.message);
        Alert.showAlert("Erreur de chargement. Veuillez verifier votre connexion internet.")
      },
    });
  }

  goToDetails(projet: any) {
    this.router.navigate(['/details-projet'], { state: { projet: projet } });
  }
}
