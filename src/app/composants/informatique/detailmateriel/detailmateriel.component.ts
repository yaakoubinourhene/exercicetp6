import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'nou-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  
  afficher:boolean =false;
  materiel:Materiel;
  identifiant:String;
  
  
   
onClick(){
  this.afficher = !this.afficher;
}
  constructor(private matereielService:MaterielService,private activatedRoute:ActivatedRoute,private router:Router) { }
 

  ngOnInit(): void {
   this.identifiant=this.activatedRoute.snapshot.params['id'];
   this.materiel=this.matereielService.getMaterielById("2");
    
    
  }
  
  onRetour(){
    this.router.navigate(['/listmateriel']);
  }


}
