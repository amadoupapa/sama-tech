import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OffreService } from '../../services-api/offre.service';
import { Alert } from '../../utils/alert';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

 private offreService = inject(OffreService);
  listeOffres!:any
   ngOnInit(): void {
       this.offreService.findAllOffres().subscribe(
        {
          next:offres=>{
             this.listeOffres = offres
             console.log("Liste offres ", this.listeOffres);
          },
          error:err=>{
            console.log(err.message);
            Alert.showAlert("Erreur de chargement. Veuillez verifier votre connexion internet.")
          }
        }
       )
   }

}
