import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Role } from '../../shared/models/role';
import { AuthentificationService } from '../../shared/services/authentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userForm: FormGroup;
  constructor(
    private router: Router,
    private authentificationService: AuthentificationService,
    private toastController: ToastController
  ) {}
  user: any = {};
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
    this.authentificationService.login(this.user).subscribe((res) => {
      console.log('res', res);
    });
    let color = '';
    let message = '';
    this.authentificationService.login(this.user).subscribe();
    var userRrole = this.authentificationService.getRole();

    if (parseInt(userRrole) === Role.admin) {
      this.router.navigate(['/admin/home']);
    }else if (parseInt(userRrole) === Role.enseignant) {
        this.router.navigate(['/enseignant/home']);
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
