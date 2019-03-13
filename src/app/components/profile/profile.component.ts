import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  this.createForm();

  }
  createForm() {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profilePicture: [null, [Validators.required, Validators.required]],
      interests : this.formBuilder.array([
        this.initArray()
    ])
    });
  }

  initArray() {
     // initialize our from array
     return this.formBuilder.group({
      interest: ['', Validators.required],
      Description: ['', Validators.required]
  });
  }

  AddIntrests() {

        // add address to the list
        const control = <FormArray>this.form.controls['interests'];
        control.push(this.initArray());

  }

  RemoveIntrests(i: number) {

    const control = <FormArray>this.form.controls['interests'];
    control.removeAt(i);
  }

  AddProfile() {
    console.log(this.form.value);
  }

}
