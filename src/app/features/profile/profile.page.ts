import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  img: string = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  email: string = "max@mustermann.at"
  constructor(private auth: AuthService) {
    
  }

  ngOnInit() {
    if (this.auth.profileCredential) {
      this.img = this.auth.profileCredential.user.photoURL;
      this.email = this.auth.profileCredential.user.email;
    }
      
  }
}
