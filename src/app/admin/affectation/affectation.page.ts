import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AffectationService } from './../../../shared/services/affectation.service';
import { ModuleService } from 'src/shared/services/module.service';
import { EnseignantService } from 'src/shared/services/enseignant.service';
import { Type } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.page.html',
  styleUrls: ['./affectation.page.scss'],
})
export class AffectationPage implements OnInit {
       constructor(    private toastController: ToastController,
    private enseignantService:EnseignantService,private moduleService: ModuleService, private affectationService: AffectationService) { }
      enseignants=[]
      modules=[]
      affectationForm:FormGroup;
      affectation:any={};
      title="Create";
    ngOnInit() {
      this.enseignantService.getAll().subscribe((res: any) => {
        this.enseignants = res;
  
    });

    this.moduleService.getAll().subscribe((res: any) => {
    this.modules = res;
}); 


this.affectationForm = new FormGroup({
  id_enseignant: new FormControl(null, [Validators.required]),
  id_module: new FormControl(null, [Validators.required]),
  
});

    }
    get Id_enseignant() {
      return this.affectationForm.get('id_enseignant');
    }

    
    get Id_module() {
      return this.affectationForm.get('id_module'); } 


      submit() {

        this.affectation.id_enseignant=this.affectationForm.get('id_enseignant').value;
        
        this.affectation.id_module=this.affectationForm.get('id_module').value;
  
          this.affectationService.create(this.affectation).subscribe((res) => {
            if (res != null) {
              console.log(res);
              this.presentToastWithOptions('Created');
            }
          });
        
      }
// cette fonction permet d'afficher la notification 

      async presentToastWithOptions(message) {
        const toast = await this.toastController.create({
          message: message + ' succesfully',
          position: 'bottom',
          color: 'success',
          duration: 2000,
        });
        await toast.present();
        this.affectationForm.reset();
      }

    
    } 