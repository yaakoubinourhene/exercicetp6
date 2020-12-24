import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nou-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  Image:any ="./assets/images/chezNous.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
