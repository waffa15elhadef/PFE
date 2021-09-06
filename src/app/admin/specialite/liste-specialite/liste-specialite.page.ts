import { FormSpecialitePage } from './../form-specialite/form-specialite.page';
import { SpecialiteService } from './../../../../shared/services/specialite.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-liste-specialite',
  templateUrl: './liste-specialite.page.html',
  styleUrls: ['./liste-specialite.page.scss'],
})
export class ListeSpecialitePage implements OnInit {

  constructor(
    private router: Router,
    private specialiteService: SpecialiteService,
    private alertController: AlertController,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
  ) {}

  specialites = [];
  filtredSpecialites = [];
  retour="retour";
  ngOnInit() {
    this.specialiteService.getAll().subscribe((res: any) => {
      this.specialites = res;
      this.filtredSpecialites = res;
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
            this.router.navigate(["/admin/detail-specialite",id])
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
    this.specialiteService.delete(id).subscribe((res) => {
      if (res != null) {
       this.doRefresh()
      }
    });
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Etes vous sur de vouloir supprimer cet element!!!',
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
      component: FormSpecialitePage,
      swipeToClose: true,
      componentProps: {
        specialiteId: id,
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
  this.specialites=[];
this.specialiteService.getAll().subscribe(res=>{this.specialites=res; this.filtredSpecialites=res;})
//event.target.complete();
    }, 2000);
  }

  searchStudent(data){
    var query=data.target.value;
    if (!query) { // revert back to the original array if no query
      this.filtredSpecialites = [...this.specialites];
    } else { // filter array by query
      this.filtredSpecialites = this.specialites.filter((e) => {
        return (e.nom.includes(query) );
      })
    }
   
  }

}
