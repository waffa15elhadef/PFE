import { ModuleService } from './../../../shared/services/module.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormModulePage } from '../form-module/form-module.page';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-liste-modules',
  templateUrl: './liste-modules.page.html',
  styleUrls: ['./liste-modules.page.scss'],
})
export class ListeModulesPage implements OnInit {
  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private router:Router,private actionSheetController: ActionSheetController,private moduleService:ModuleService) {}

  modules=[];
  filtredModules=[];
  ngOnInit() {
    this.moduleService.getAll().subscribe((res: any) => {
      console.log(res)
      this.modules = res;
      this.filtredModules = res;
    });
  }
  
  displayMenu(id) {
    this.presentActionSheet(id);
  }
  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.presentAlertConfirm(id);
          },
        },
        {
          text: 'Edit',
          icon: 'create-outline',
          handler: () => {
            this.showModal(id);          },
        },
        {
          text: 'Display',
          icon: 'eye-outline',
          handler: () => {
            this.router.navigate(["/admin/detail-module",id])
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
 
  delete(id) {
    this.moduleService.delete(id).subscribe((res) => {
      if (res != null) {
        let index = this.modules.findIndex(d => d.id_module === id); //find index in your array
        if (index > -1) {
          this.modules.splice(index, 1);
        }
      }
    });
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.delete(id);
          },
        },
      ],
    });

    await alert.present();
  }

  showModal(id) {
    this.presentModal(id);
  }
  async presentModal(id) {
    const modal = await this.modalController.create({
      component: FormModulePage,
      swipeToClose: true,
      componentProps: {
        moduleId: id,
      },
    });

    await modal.present();

    await modal.onDidDismiss().then(() => {
     //todorefresh la liste
     this.doRefresh();
    });
  }

  doRefresh() {

    setTimeout(() => {
  this.modules=[];
this.moduleService.getAll().subscribe(res=>{this.modules=res; this.filtredModules=res;})
//event.target.complete();
    }, 2000);
  }



  searchStudent(data){
    var query=data.target.value;
    if (!query) { // revert back to the original array if no query
      this.filtredModules = [...this.modules];
    } else { // filter array by query
      this.filtredModules = this.modules.filter((e) => {
        return (e.nom.includes(query) );
      })
    }
   
  }
}
