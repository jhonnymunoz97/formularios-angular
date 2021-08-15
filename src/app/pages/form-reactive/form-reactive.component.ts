import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  form: FormGroup;

  constructor(private formB : FormBuilder) { 
    this.form = this.crearFormulario()
    this.loadForm()
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    return this.formB.group(
      {
        name     : ['',Validators.required],
        email    : ['',[Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),Validators.required]],
        last_name: ['',Validators.required],
        direction: this.formB.group({
          provincia: ['',Validators.required],
          ciudad: ['',Validators.required]
        }),
        pasatiempos: this.formB.array([]),
        password:['',[Validators.required,Validators.minLength(6)] ],
        passwordConfirm:['',[Validators.required] ]
      },{
        validators: this.passwordIguales('password','passwordConfirm')
      }
    );
  }

  passwordIguales(pass1:string,pass2:string){
    return( formGroup: FormGroup )=>{
      const pass1Control = formGroup.controls[pass1];
      const pass2Control = formGroup.controls[pass2];
      if(pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null)
      }else{
        pass2Control.setErrors({noEsIgual:true})
      }
    }
  }

  loadForm(){
    //this.form.setValue({
    this.form.reset({
      name:'',
      last_name:'',
      email:'',
      password:'',
      passwordConfirm:'',
      direction:{
        provincia:'',
        ciudad:''
      }
    });
    // Inicializar los FormArray  
    //[].forEach(e => this.pasatiempos.push(this.formB.control(e)))
  }

  validarCampo(campo:string):boolean{
    return (<boolean>this.form.get(campo)?.invalid) && (<boolean>this.form.get(campo)?.touched) 
  }

  get pasatiempos():any{
    return this.form.get('pasatiempos') as FormArray
  }

  addPasatiempo(){
    this.pasatiempos.push( this.formB.control('',Validators.required))
  }

  deletePasatiempo(pasatiempo:number){
    this.pasatiempos.removeAt(pasatiempo)
  }

  confirmPassword():boolean{
    return (this.form.get('password')?.value === this.form.get('passwordConfirm')?.value) ? false : true
  }

  save(){
    if(this.form.valid){
      this.form.reset()
      this.loadForm()
    }else{
      this.form.markAllAsTouched()
    }
  }

}
