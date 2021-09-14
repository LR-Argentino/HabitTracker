import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ToasterService } from '../services/toaster.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private auth: AuthService,
  ) {}

  loginViaGoogle() {
    this.auth.loginViaGoogle()
  }



  deletedItem(event) {
    console.log(event);
  }
}
