import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2'
import { ContactService } from '../../services-api/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private contactService = inject(ContactService)

  contactForm = new FormGroup({
    nom: new FormControl(),
    email: new FormControl(),
    objet: new FormControl(),
    message: new FormControl(),
  })

  envoyerMessage(){
    //console.log(this.contactForm.value);
   
    this.contactService.createContactMessage(this.contactForm.value).subscribe(
      {
        next:res=>{
          Swal.fire({
            title: '',
            text: "Merci pour votre message ! Nous l'avons bien reçu et reviendrons vers vous dans les plus brefs délais.",
            icon: 'success',
            timer: 5000,
            confirmButtonText: 'OK',
            confirmButtonColor : "#011d7c"
          })
        },
        error:err=>{
          console.log(err);
          Swal.fire(
            {
              title: '',
              text: "Une erreur est survenue !",
              icon: 'error',
              timer: 10000,
              confirmButtonText: 'OK',
              confirmButtonColor : "#011d7c"
            }
          )
        }
      }
    )

    
    
  }

}
