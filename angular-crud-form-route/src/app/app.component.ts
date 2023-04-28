import { Component, Input } from '@angular/core';
import { IUserInterface } from './interface/userInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  userValue : IUserInterface[] = [ 
    {name: 'Jai', email: 'abc@gmail.com',country: 'India', state: 'kar', password : '123',gender: 'male',qualification: 'B.Tech'},
    {name: 'Krishan', email: 'ab@gmail.com',country: 'India', state: 'Bih', password : '1234',gender: 'male',qualification: 'B.Tech'},
    {name: 'Binit', email: 'c@gmail.com',country: 'India', state: 'UP', password : '12',gender: 'male',qualification: 'B.Tech'},
    {name: 'Anit', email: 'abcd@gmail.com',country: 'India', state: 'MP', password : '13',gender: 'male',qualification: 'B.Tech'}
  ]
}
