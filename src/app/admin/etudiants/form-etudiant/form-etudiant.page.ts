import { EtudiantService } from './../../../../shared/services/etudiant.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.page.html',
  styleUrls: ['./form-etudiant.page.scss'],
})
export class FormEtudiantPage implements OnInit {
  constructor(
    public toastController: ToastController,
    private modalCtrl: ModalController,
    private etudiantService: EtudiantService
  ) {}

  @Input() etudiantId: string;

  title = 'Create';
  etudiantForm: FormGroup;
  listEtudiants = [];
  etudiant: any = {};
  ngOnInit() {
    this.etudiantForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birthdate: new FormControl(null, [Validators.required]),
    });

    if (
      this.etudiantId == '' ||
      this.etudiantId == null ||
      this.etudiantId == undefined
    ) {
      this.title = 'Create';
    } else {
      this.etudiantService
        .getById(parseInt(this.etudiantId))
        .subscribe((res) => {
          this.etudiantForm.get('name').setValue(res.name);
          this.etudiantForm.get('birthdate').setValue(res.birthdate);
          this.etudiantForm.get('email').setValue(res.email);
        });
      this.title = 'Update';
    }
  }

  get Name() {
    return this.etudiantForm.get('name');
  }
  get Email() {
    return this.etudiantForm.get('email');
  }
  get Birthdate() {
    return this.etudiantForm.get('birthdate');
  }
  close() {
    this.modalCtrl.dismiss();
  }

  submit() {
    this.etudiant.name = this.etudiantForm.get('name').value;
    this.etudiant.birthdate = this.etudiantForm.get('birthdate').value;
    this.etudiant.email = this.etudiantForm.get('email').value;
    if (
      this.etudiantId == '' ||
      this.etudiantId == null ||
      this.etudiantId == undefined
    ) {
      this.etudiantService.create(this.etudiant).subscribe((res) => {
        if (res) {
          this.presentToastWithOptions('Created');
        }
      });
    } else {
      this.etudiantService.edit(this.etudiantId, this.etudiant).subscribe(
        (res) => {
          if (res) {
            console.log('res', res);
            this.presentToastWithOptions('Edited');
          }
        },
        (err) => {            console.log('err', err);
      }
      );
    }
  }

  async presentToastWithOptions(message) {
    const toast = await this.toastController.create({
      message: message + ' succesfully',
      position: 'bottom',
      color: 'success',
      duration: 2000,
    });
    await toast.present();
    this.close();
  }
}
