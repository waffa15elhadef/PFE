import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/shared/models/user';
import { ToastController } from '@ionic/angular';
import { AuthentificationService } from 'src/shared/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = { username: '', password: '', name: '', email: '', roles: [] };
  userForm: FormGroup;
  constructor(
    private router: Router,
    private authentificationService: AuthentificationService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  get Username() {
    return this.userForm.get('username');
  }
  get Password() {
    return this.userForm.get('password');
  }

  login() {
    this.user.username = this.userForm.get('username').value;
    this.user.password = this.userForm.get('password').value;
    // let color = '';
    // let message = '';
    // this.authentificationService.Login(this.user).subscribe((res) => {
    //   this.authentificationService.subject.subscribe((res) => {
    //     if (
    //       this.authentificationService.user != null &&
    //       this.authentificationService.user != undefined
    //     ) {
    //       this.user = this.authentificationService.user;
    //     }

    //     this.user.roles.filter((r) => {
    //       if (r.name == 'ADMIN') {
    //         this.router.navigate(['admin/home']);
    //       }
    //     });
    //   });
    // });
if(this.userForm.get('username').value==="admin"){
  this.router.navigate(['admin/home']);
}
if(this.userForm.get('username').value==="enseignant"){
  this.router.navigate(['enseignant/home']);
}

  }
  async presentToast(message: string, color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
    });
    toast.present();
  }
}
