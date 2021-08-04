import { EnseignantService } from 'src/shared/services/enseignant.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form-enseignant',
  templateUrl: './form-enseignant.page.html',
  styleUrls: ['./form-enseignant.page.scss'],
})
export class FormEnseignantPage implements OnInit {
  constructor(
    public toastController: ToastController,
    private modalCtrl: ModalController,
    private enseignantService: EnseignantService
  ) {}

  @Input() enseignantId: string;

  title = 'Create';
  enseignantForm: FormGroup;
  listeEnseignants = [];
  enseignant: any = {};
  ngOnInit() {
    this.enseignantForm = new FormGroup({
      nom: new FormControl(null, [Validators.required]),
      prenom: new FormControl(null, [Validators.required]),
      date_naissance: new FormControl(null, [Validators.required]),
      lieu_naissance: new FormControl(null, [Validators.required]),
      matricule: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      mot_de_passe: new FormControl(null, [Validators.required]),
      telephone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });

    if (
      this.enseignantId == '' ||
      this.enseignantId == null ||
      this.enseignantId == undefined
    ) {
      this.title = 'Create';
    } else {
      this.enseignantService
        .getById(parseInt(this.enseignantId))
        .subscribe((res) => {
          this.enseignantForm.get('nom').setValue(res.nom);
          this.enseignantForm.get('prenom').setValue(res.prenom);
          this.enseignantForm.get('email').setValue(res.email);

          this.enseignantForm
            .get('date_naissance')
            .setValue(res.date_naissance);
          this.enseignantForm
            .get('lieu_naissance')
            .setValue(res.lieu_naissance);
          this.enseignantForm.get('matricule').setValue(res.matricule);

          this.enseignantForm.get('telephone').setValue(res.telephone);
          this.enseignantForm.get('username').setValue(res.username);
          this.enseignantForm.get('mot_de_passe').setValue(res.mot_de_passe);
        });
      this.title = 'Update';
    }
  }

  get Nom() {
    return this.enseignantForm.get('nom');
  }
  get Email() {
    return this.enseignantForm.get('email');
  }
  get Prenom() {
    return this.enseignantForm.get('prenom');
  }

  get Telephone() {
    return this.enseignantForm.get('telephone');
  }
  get Username() {
    return this.enseignantForm.get('username');
  }
  get Mot_de_passe() {
    return this.enseignantForm.get('mot_de_passe');
  }
  get Matricule() {
    return this.enseignantForm.get('matricule');
  }
  get Date_naissance() {
    return this.enseignantForm.get('date_naissance');
  }
  get Lieu_naissance() {
    return this.enseignantForm.get('lieu_naissance');
  }

  close() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  submit() {
    this.enseignant.nom = this.enseignantForm.get('nom').value;
    this.enseignant.prenom = this.enseignantForm.get('prenom').value;
    this.enseignant.date_naissance = this.formatDate(
      this.enseignantForm.get('date_naissance').value
    );
    this.enseignant.lieu_naissance =
      this.enseignantForm.get('lieu_naissance').value;
    this.enseignant.matricule = this.enseignantForm.get('matricule').value;
    this.enseignant.telephone = this.enseignantForm.get('telephone').value;
    this.enseignant.username = this.enseignantForm.get('username').value;
    this.enseignant.mot_de_passe =
      this.enseignantForm.get('mot_de_passe').value;
    this.enseignant.email = this.enseignantForm.get('email').value;
    if (
      this.enseignantId == '' ||
      this.enseignantId == null ||
      this.enseignantId == undefined
    ) {
      this.enseignantService.create(this.enseignant).subscribe((res) => {
        if (res != null) {
          console.log(res);
          this.presentToastWithOptions('Created');
        }
      });
    } else {
      this.enseignant.id_enseignant = this.enseignantId;
      this.enseignantService.edit(this.enseignant).subscribe(
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
  formatDate(date) {
    let birthday = new Date(date);
    return birthday.toISOString().split('T')[0];
  }
}
