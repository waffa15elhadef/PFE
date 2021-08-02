import { SpecialiteService } from './../../../../shared/services/specialite.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.page.html',
  styleUrls: ['./form-specialite.page.scss'],
})
export class FormSpecialitePage implements OnInit {
constructor(
  public toastController: ToastController,
    private modalCtrl: ModalController,
    private specialiteService: SpecialiteService
  ) {}

  @Input() specialiteId: string;

  title = 'Create';
  specialiteForm: FormGroup;
  specialite : any = {};
  ngOnInit() {
    this.specialiteForm = new FormGroup({
      nom: new FormControl(null, [Validators.required]),
      filiere: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required])
      
    });

    if (
      this.specialiteId == '' ||
      this.specialiteId == null ||
      this.specialiteId == undefined
    ) {
      this.title = 'Create';
    } else {
      this.specialiteService
        .getById(parseInt(this.specialiteId))
        .subscribe((res) => {
          this.specialiteForm.get('nom').setValue(res.nom);
          this.specialiteForm.get('code').setValue(res.code);
          this.specialiteForm.get('filiere').setValue(res.filiere);

       });
      this.title = 'Update';
    }
  }

  get Nom() {
    return this.specialiteForm.get('nom');
  }
  get Code() {
    return this.specialiteForm.get('code');
  }
  get Filiere() {
    return this.specialiteForm.get('filiere');
  }

  close() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  submit() {
    this.specialite.nom = this.specialiteForm.get('nom').value;
    this.specialite.code = this.specialiteForm.get('code').value;
    this.specialite.filiere = this.specialiteForm.get('filiere').value;
    
    if (
      this.specialiteId == '' ||
      this.specialiteId == null ||
      this.specialiteId == undefined
    ) {
      this.specialiteService.create(this.specialite ).subscribe((res) => {
        if (res != null) {
          console.log(res);
          this.presentToastWithOptions('Created');
        }
      });
    } else {
      this.specialite.id_specialite  = this.specialiteId;
      this.specialiteService.edit(this.specialite ).subscribe(
        (res) => {
          if (res) {
            console.log('res', res);
            this.presentToastWithOptions('Edited');
          }
        },
        (err) => {
          console.log('err', err);
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
