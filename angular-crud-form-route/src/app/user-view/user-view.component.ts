import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { IUserInterface } from '../interface/userInterface';
import { MatSort, Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class UserViewComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ContentChild('contentsView', {static: true}) contentsView!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() userValueData! :  IUserInterface[];
  editIndexGet!: number;
  navigateView = "false";
   userValue : IUserInterface[] = [ 
    {name: 'Jai', email: 'abc@gmail.com',country: 'India', state: 'kar', password : '123',gender: 'male',qualification: 'B.Tech'},
    {name: 'Krishan', email: 'ab@gmail.com',country: 'India', state: 'Bih', password : '1234',gender: 'male',qualification: 'B.Tech'},
    {name: 'Binit', email: 'c@gmail.com',country: 'India', state: 'UP', password : '12',gender: 'male',qualification: 'B.Tech'},
    {name: 'Anit', email: 'abcd@gmail.com',country: 'India', state: 'MP', password : '13',gender: 'male',qualification: 'B.Tech'}
  ]
  displayedColumns: string[] = ['name', 'email', 'country', 'state', 'password', 'gender', 'qualification', 'editEmployee','deleteEmployee'];
  dataSource = new MatTableDataSource<IUserInterface>(this.userValue);
  data : any;
 
  constructor(private activatedRoute: ActivatedRoute , private router: Router,private changeDetector: ChangeDetectorRef ) {
    console.log("constuctor called");
    this.data = this.router.getCurrentNavigation()?.extras.state;
     console.log(this.data)
      this.activatedRoute.params.subscribe(data => this.navigateView = data['id']);
     console.log(this.navigateView);
  }
 
  ngOnInit() {
    console.log("OnInit called");
    // console.log(this.userValueData);
    // this.userValue.push({name: 'Jai', email: 'abc@gmail.com',country: 'India', state: 'kar', password : '123',gender: 'male',qualification: 'B.Tech'});
   console.log(this.navigateView);
  //  this.navigateView = false;
  
    if(JSON.parse(this.navigateView.toLowerCase())) {
    // this.userValue.push({name: this.data?.name, email: this.data?.email,country: this.data?.country, state: this.data?.state, password : this.data?.password,gender: this.data?.gender,qualification: this.data?.qualification});
   this.userValue[this.data?.editIndex].name = this.data?.name;
   this.userValue[this.data?.editIndex].email = this.data?.email;
   this.userValue[this.data?.editIndex].country = this.data?.country;
   this.userValue[this.data?.editIndex].state = this.data?.state;
   this.userValue[this.data?.editIndex].password = this.data?.password;
   this.userValue[this.data?.editIndex].gender = this.data?.gender;
   this.userValue[this.data?.editIndex].qualification = this.data?.qualification;
  }
  else {
    this.dataSource.data.push({name: this.data?.name, email: this.data?.email,country: this.data?.country, state: this.data?.state, password : this.data?.password,gender: this.data?.gender,qualification: this.data?.qualification})
    this.dataSource._updateChangeSubscription();  
  }
  }

  ngDoCheck() {
    // Use it with caution. It can create performance issues when implemented incorrectly.
    // console.log("ngDoCheck called");
    // this.changeDetector.markForCheck();
    // this.changeDetector.detectChanges();
  }
  ngAfterContentInit() {
    // console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
    console.log(this.contentsView?.nativeElement.textContent);
  }
  
  ngAfterViewInit() {
    // console.log("ngAfterViewInit called");
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewChecked() {
    // console.log("ngAfterViewChecked called");
  }

  deleteUser(index: number) {
    // this.userValue.slice(index);
    this.dataSource.data.splice(index,1);
    this.dataSource._updateChangeSubscription();
  }

  editUser(element: IUserInterface, index: number) {
    console.log(element);
    this.router.navigate(['/register'],{
      state: {
        name: element.name,
        email: element.email,
        country: element.country,
        state: element.state,
        password: element.password,
        gender: element.gender,
        qualification: element.qualification,
        editIndex : index
      }
    })
  }

  /** Announce the change in sort state for assistive technology. */
  // announceSortChange(sortState: Sort) {
  //   // This example uses English messages. If your application supports
  //   // multiple language, you would internationalize these strings.
  //   // Furthermore, you can customize the message to add additional
  //   // details about the values being sorted.
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }

  goToUserReg() {
    this.router.navigate(['register']);
  }

  ngOnDestroy() {
    // console.log("ngOnDestroy called");
  }
}
// const userValue : IUserInterface[] = [ 
//   {name: 'Jai', email: 'abc@gmail.com',country: 'India', state: 'kar', password : '123',gender: 'male',qualification: 'B.Tech'},
//   {name: 'Krishan', email: 'ab@gmail.com',country: 'India', state: 'Bih', password : '1234',gender: 'male',qualification: 'B.Tech'},
//   {name: 'Binit', email: 'c@gmail.com',country: 'India', state: 'UP', password : '12',gender: 'male',qualification: 'B.Tech'},
//   {name: 'Anit', email: 'abcd@gmail.com',country: 'India', state: 'MP', password : '13',gender: 'male',qualification: 'B.Tech'}
// ]
