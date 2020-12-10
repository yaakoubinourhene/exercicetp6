import { Component, OnInit, Input } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'nou-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
@Input ()comm:Commentaire;
@Input() indice:number;
  constructor() { }

  ngOnInit(): void {
  }

}
