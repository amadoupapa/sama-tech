import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProjetService } from '../../services-api/projet.service';

@Component({
  selector: 'app-details-projet',
  standalone: true,
  imports: [],
  templateUrl: './details-projet.component.html',
  styleUrl: './details-projet.component.scss',
})
export class DetailsProjetComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private projetService = inject(ProjetService);

  
  projet: any;
  idProjet: number | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idProjet = params['idProjet'];
    });
    if (this.idProjet) {
      this.projetService.fiindById(this.idProjet).forEach((p) => {
        this.projet = p;
        console.log("Objet projet : ",p);
      });
    }

    console.log(this.idProjet);
  }
}
