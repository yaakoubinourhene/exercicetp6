import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'nou-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean =false;
  materiels:Materiel[];
  
  
   
onClick(){
  this.afficher = !this.afficher;
}
  constructor(private matereielService:MaterielService) { }

  ngOnInit(): void {
    
  }
  
  


}
