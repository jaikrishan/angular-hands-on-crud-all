// import { Component } from '@angular/core';
// import {
//   FormArray,
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   Validators,
// } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   // userForm: FormGroup;
//   // userData = [{ name: 'jai', designation: 'LE', gender: 'male', skill: 'JS' }];
//   checkEdit = false;
//   editIndex: number;
//   skillSet = [
//     { name: 'Js', value: 'Js' },
//     { name: 'Angular', value: 'Angular' },
//     { name: 'React', value: 'React' },
//     { name: 'Css', value: 'Css' },
//   ];
//   userData = [
//     {
//       name: 'jai',
//       designation: 'LE',
//       gender: 'male',
//       skill: 'Js',
//     },
//   ];

//   constructor(private fb: FormBuilder) {}

  // when using formBuilder , no need to declare the form group above
  // userForm = this.fb.group({
  //   name: ['jai', [Validators.required]],
  //   designation: ['SE', [Validators.required]],
  //   gender: ['male', [Validators.required]],
  //   skill: ['Angular', [Validators.required]],
  // });
  // userForm = new FormGroup({
  //   name: new FormControl(null, [Validators.required]),
  //   designation: new FormControl('SSE', [Validators.required]),
  //   gender: new FormControl('female', [Validators.required]),
    // skillArr: this.fb.array([]),
    // skill : new FormControl(true , [Validators.required])
    // skillSet: new FormGroup({
    // JS: new FormControl(true),
    // Angular: new FormControl(false),
    // }),
  //   skills: this.fb.array([this.newSkill()]),
  // });
  // onSkillChange(e) {
  //   debugger;
  //   const checkArray = this.userForm.get('skillArr') as FormArray;
  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((control: FormControl) => {
  //       if (control.value === e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  // get skills(): FormArray {
  //   return this.userForm.get('skills') as FormArray;
  // }

  // newSkill(): FormGroup {
  //   return this.fb.group({
  //     skill: '',
  //   });
  // }

  // addSkill() {
  //   this.skills.push(this.newSkill());
  //   // this.skills.push(new FormControl)
  // }

  // removeSkill(i) {
  //   this.skills.removeAt(i);
  // }

  // saveUser() {
  //   // console.log(this.userForm.value.skillArr[0]);
  //   console.log(this.userForm.value);
  //   let arr =[];
  //   this.userForm.value.skills.forEach(t=> arr.push(t.skill))
  //   console.log(arr);
  //   console.log(this.userForm.value.skills);
  //   // console.log(this.userForm.controls.JS.value);
  //   // if (this.checkEdit) {
  //   //   this.userData[this.editIndex].name = this.userForm.controls.name.value;
  //   //   this.userData[this.editIndex].designation =
  //   //     this.userForm.controls.designation.value;
  //   //   this.userData[this.editIndex].gender =
  //   //     this.userForm.controls.gender.value;
  //   //   this.userData[this.editIndex].skill =
  //   //     this.userForm.value.skillArr.join(',');
  //   // }
  //   // else {
  //   this.userData.push({
  //     name: this.userForm.controls.name.value,
  //     designation: this.userForm.controls.designation.value,
  //     gender: this.userForm.controls.gender.value,
  //     skill: arr.join(','),
  //     // skill: this.userForm.value.skillArr.join(','),
  //   });
  //   // }
  // }

  // editData(item, index) {
  //   // pending checkbox checked patchValue
  //   console.log(item);
  //   this.editIndex = index;
  //   this.checkEdit = true;
  //   this.userForm.patchValue({
  //     name: item.name,
  //     designation: item.designation,
  //     gender: item.gender,
  //     skillArr: item.skill,
  //   });
  //   const checkArray = this.userForm.get('skillArr') as FormArray;
  //   checkArray.controls[index].patchValue(true);
  // }

  // deleteData(i: number) {
  //   this.userData.splice(i, 1);
  // }
// }
