import { Component } from '@angular/core';

//remember to import this if using NGFORM
import { NgForm } from '@angular/forms';
import { animal } from '../models/animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
  //instantiate the form with restrictions of animal model

export class AnimalFormComponent {
 form: animal = {
   id: 0,
   name: '',
   lifespan: 0,
   email: ''
 };

 onSubmit(_t4: NgForm) :void {
  console.log('Animal' + _t4.form.value);
  
 }

 onReset(_t7: NgForm) {
  _t7.reset();
 }
}
