import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // userModel = new User("","")
 
  userModel = new User("jessica@gmail.com","batata123")
 
  onSubmit(){
     console.log(this.userModel)
  }
}
