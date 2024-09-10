import { Component, inject, OnInit } from '@angular/core';
import { PartenaireService } from '../../services-api/partenaire.service';

@Component({
  selector: 'app-partenaire',
  standalone: true,
  imports: [],
  templateUrl: './partenaire.component.html',
  styleUrl: './partenaire.component.scss'
})
export class PartenaireComponent implements OnInit {
  private partenaireService = inject(PartenaireService);
  partenaireListe:any;

  ngOnInit(): void {
    this.partenaireService.findAllPartenaire().subscribe({
      next:value=>{
        this.partenaireListe = value
        console.log('Liste partenaires', this.partenaireListe);
      },
      error:err=>{
        console.log(err);
      }
    })
      
  }


}
