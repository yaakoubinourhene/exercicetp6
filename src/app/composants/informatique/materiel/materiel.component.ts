import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'nou-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  
@Input() mat:Materiel;
  constructor() { }

  ngOnInit(): void {
    
  }

}
