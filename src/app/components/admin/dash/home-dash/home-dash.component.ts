import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services-api/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyEncryption } from '../../../../utils/cryptage.util';

@Component({
  selector: 'app-home-dash',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-dash.component.html',
  styleUrl: './home-dash.component.scss'
})
export class HomeDashComponent implements OnInit {
  authService = inject(AuthService)
 
  ngOnInit(): void {
     this.authService.getPrincipal() ;

  }

}
