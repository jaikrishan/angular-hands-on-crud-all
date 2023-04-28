import { Component, ContentChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit, OnDestroy {
  // @Input() title = 'angular-crud-form-route';
  @ContentChild('contentsReg', {static: true}) contentsReg!: ElementRef;
  data : any;
  editData = "false";
  editIndex! : number 
  // name: string ="";
// name = new FormControl('jai', [Validators.required])
// email = new FormControl('', [Validators.required])
// country = new FormControl('', [Validators.required])
// state = new FormControl('', [Validators.required])
// password = new FormControl('', [Validators.required])
// gender = new FormControl('', [Validators.required])
// qualification = new FormControl('', [Validators.required])

// userForm = new FormGroup({
//   name: new FormControl('', [Validators.required]),
//   email: new FormControl('', [Validators.required]),
//   country: new FormControl('', [Validators.required]),
//   state: new FormControl('', [Validators.required]),
//   password: new FormControl('', [Validators.required]),
//   gender: new FormControl('', [Validators.required]),
//   qualification: new FormControl('', [Validators.required])
// })

constructor(private fb: FormBuilder, private router: Router){
  this.editData = "false";
  this.data =  this.router.getCurrentNavigation()?.extras?.state;
  this.editIndex = this.data?.editIndex;
  if(this.data) {
    this.editData = "true"
    this.userForm.patchValue({
      name: this.data.name,
      email: this.data.email,
      country: this.data.country,
      state: this.data.state,
      password: this.data.password,
      gender: this.data.gender,
      qualification: this.data.qualification
    })
  }
}
// disabled
userForm = this.fb.group({
  name : ['jai' , [Validators.required]],
  email : ['jai' , [Validators.required]],
  country : [null ,{disabled : true}, []],
  state : [null , []],
  password : [null , []],
  gender : [null , []],
  qualification : [null , []],
  skills : this.fb.array([])
})

get skills() : FormArray {
  return this.userForm.get('skills') as FormArray;
}



ngOnInit(): void {
  // this is priority
  // this.userForm.patchValue({
  //   name:'Hello'
  // })
  // this.userForm.setValue({
  //   name:'Hello',
  //   email: 'abc@gmail.com',
  //   country:null,
  //   state: null,
  //   password:null,
  //   gender: null,
  //   qualification:null,
  // })
}
submitData() {
  // console.log(this.userForm.controls.name.value);
  // console.log(this.name);
  // param /true and queryParam ?,
  console.log(this.editData);
  this.router.navigate(['/view', this.editData], {
    state: {
      name: this.userForm.controls.name.value,
      email: this.userForm.controls.email.value,
      country: this.userForm.controls.country.value,
      state: this.userForm.controls.state.value,
      password: this.userForm.controls.password.value,
      gender: this.userForm.controls.gender.value,
      qualification: this.userForm.controls.qualification.value,
      editIndex : this.editIndex
    }
  });
}

newSkill() : FormGroup {
  return this.fb.group({
    skills: ''
  })
}

addSkill() {
  this.skills.push(this.newSkill());
}

removeSkill(i: number) {
  this.skills.removeAt(i)
}
ngOnDestroy() {
  this.editData = "false";
}
}
