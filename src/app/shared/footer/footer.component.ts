import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  age:number

  constructor() { 
    this.age = new Date().getFullYear()
  }

  ngOnInit(): void {
  }

}
