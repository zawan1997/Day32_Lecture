import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  submitted:any;

form: FormGroup = new FormGroup( {
  name : new FormControl<string>(''),
  email : new FormControl<string>(''),
  username : new FormControl<string>(''),
  password : new FormControl<string>('')
})

onSubmit() {
 this.submitted = true;

 if(this.form.invalid) {
  return;
 } else {
  console.log(this.form.value);
 }
}

formBuilder : FormBuilder;
constructor(fb: FormBuilder){
  this.formBuilder = fb;
}
ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      username : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    })
}

onReset() {
  this.submitted = false;
  this.form.reset();
 }

// ngOnInit(): void {
//   this.form = this.formBuilder.group({
//     name : this.formBuilder.control<string>('') ['', Validators.required],
//     email : this.formBuilder.control<string>('') ['', [Validators.required, Validators.email]],
//     username : this.formBuilder.control<string>('') ['', [Validators.required, Validators.minlength(6), Validators.maxlength(10)]],
//     password : this.formBuilder.control<string>(''),
//   })
// }

}
