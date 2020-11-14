import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nou-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nomSupermarket: string = "Chez Nous";
 lesCategories= [
 {nom:'informatique', image:'assets/images/informatique.jpg'},
 {nom:'alimentation', image:'assets/images/alimentation.jpg'},
 {nom:'vetements', image:'assets/images/habits.png'},
 {nom:'electroménager', image:'assets/images/electromenager.jpg'}
 ]


  constructor() { }

  ngOnInit(): void {
  }

}
