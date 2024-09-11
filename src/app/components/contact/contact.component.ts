import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm = new FormGroup({
    nomComplet: new FormControl(),
    email: new FormControl(),
    objet: new FormControl(),
    message: new FormControl(),
  })

  envoyerMessage(){
    //console.log(this.contactForm.value);
    Swal.fire({
      title: '',
      text: "Merci pour votre message ! Nous l'avons bien reçu et reviendrons vers vous dans les plus brefs délais.",
      icon: 'success',
      timer: 5000,
      confirmButtonText: 'OK',
      confirmButtonColor : "#011d7c"
    })
    
  }

}
