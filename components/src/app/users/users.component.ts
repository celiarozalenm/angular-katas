import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})

export class UsersComponent implements OnInit {

  // Child gets parent info
  @Input() public user_input: User; 

  constructor() { }

  ngOnInit() {
  }

}
