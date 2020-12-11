import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'nou-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {
  materiels:Materiel[];

  constructor(private matereielservice:MaterielService) { }

  ngOnInit(): void {
    this.materiels = this.matereielservice.getmateriels();

  }

}
