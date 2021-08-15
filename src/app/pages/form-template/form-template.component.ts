import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';
import { Pais, User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  user: User = {
    name      : '',
    pais      : '',
    email     : '',
    genero    : '',
    last_name : '',
  }

  pais: Pais[]
      
  constructor( private paises: PaisesService) {
    this.pais = []
  }

  ngOnInit(): void {
    this.paises.getPaises().subscribe(resp => this.pais = resp)    
  }

  save(form:NgForm){
    if(form.valid){
      console.log(this.user);
      //form.reset()
    }else{
      Object.values(form.controls).forEach( control => {
        control.markAsDirty()
      })
    }
  }

}
