import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services-api/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  authService = inject(AuthService)

  
loginForm = new FormGroup({
  email : new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required])

})
  
  onSubmit(){
    if(this.loginForm.valid){
      this.authService.authenticate(this.loginForm.value.email!,this.loginForm.value.password!)
    }
  }

}
