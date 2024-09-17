import { Component, inject, OnInit } from '@angular/core';
import { OffreService } from '../../../../services-api/offre.service';
import { Alert } from '../../../../utils/alert';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-gestion-offres',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './gestion-offres.component.html',
  styleUrl: './gestion-offres.component.scss'
})
export class GestionOffresComponent implements OnInit {
  listeOffres!:any[];
  offresService = inject(OffreService)

  ajouterForm = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    shortDescription: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    imageUrl: new FormControl('',[Validators.required])

  })
 ngOnInit(): void {
     this.offresService.findAllOffres().subscribe({
      next:value=>{
        this.listeOffres = value
        
      },
      error:err=>{
        Alert.showAlert(err.message)
      }
     })
 }

 showAjouterModal(){
    const modalElement = document.getElementById('exampleModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  
 }

 onAjouterOffre(){
   if(this.ajouterForm.valid){

   }
 }


}
