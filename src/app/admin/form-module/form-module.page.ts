import { SpecialiteService } from './../../../shared/services/specialite.service';
import { ModuleService } from './../../../shared/services/module.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { formatPercent } from '@angular/common';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.page.html',
  styleUrls: ['./form-module.page.scss'],
})
export class FormModulePage implements OnInit {

  constructor(
    public toastController: ToastController,
    private modalCtrl: ModalController,
    private moduleService: ModuleService, 
    private specialiteService:SpecialiteService
  ) {}

  @Input() moduleId: string;

  title = 'Create';
  moduleForm: FormGroup;
  listeModules = [];
  module: any = {};
  specialites=[]
  ngOnInit() {
this.specialiteService.getAll().subscribe(res=>{
  this.specialites=res;
})
    this.moduleForm = new FormGroup({
      nom: new FormControl(null, [Validators.required]),
      semestre: new FormControl(null, [Validators.required]),
      coefficient: new FormControl(null, [Validators.required]),
      credit: new FormControl(null, [Validators.required]),
      id_specialite: new FormControl(null,[Validators.required])
    });
    if (
      this.moduleId == '' ||
      this.moduleId == null ||
      this.moduleId == undefined
    ) {
      this.title = 'Créer';
    } else {
      this.moduleService
        .getById(parseInt(this.moduleId))
        .subscribe((res) => {
          console.log(res,"m");
          
          this.moduleForm.get('nom').setValue(res.intitule);
          this.moduleForm.get('semestre').setValue(res.semestre);
          this.moduleForm.get('coefficient').setValue(res.coefficient);
          this.moduleForm.get('credit').setValue(res.credit);
          this.moduleForm.get('id_specialite').setValue(res.specialite.id_specialite);
          console.log("lol",res.specialite.id_specialite)
        });
      this.title = 'Update';
    }
  }

  get Nom() {
    return this.moduleForm.get('nom');
  }

  get Credit() {
    return this.moduleForm.get('credit');
  }
  get Semestre() {
    return this.moduleForm.get('semestre');
  }
  get Specialite() {
    return this.moduleForm.get('id_specialite');
  }
  get Coefficient() {
    return this.moduleForm.get('coefficient');
  }
  
  close() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  submit() {
    this.module.intitule = this.moduleForm.get('nom').value;
    this.module.semestre = this.moduleForm.get('semestre').value;
    this.module.credit = this.moduleForm.get('credit').value;
    this.module.id_specialite = this.moduleForm.get('id_specialite').value;
    this.module.coefficient = this.moduleForm.get('coefficient').value;
   
 
    if (
      this.moduleId == '' ||
      this.moduleId == null ||
      this.moduleId == undefined
    ) {
      this.moduleService.create(this.module).subscribe((res) => {
        if (res != null) {
          console.log(res);
          this.presentToastWithOptions('Created');
        }
      });
    } else {
      this.module.id_module = this.moduleId;
      this.moduleService.edit(this.module).subscribe(
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
    this.moduleForm.reset()

    await toast.present();
    this.close();

  }
}
