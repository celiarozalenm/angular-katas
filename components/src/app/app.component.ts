import { Component} from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Parent Info
  public user_info: User = {
    name: 'Father User',
    surname: 'Father Surname',
    adress: 'Nowhere N1',
    phone_number: 60000000
  };  

}
