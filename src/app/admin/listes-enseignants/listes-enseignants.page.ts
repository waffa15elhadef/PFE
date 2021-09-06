import { EnseignantService } from './../../../shared/services/enseignant.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormEnseignantPage } from '../form-enseignant/form-enseignant.page';

@Component({
  selector: 'app-listes-enseignants',
  templateUrl: './listes-enseignants.page.html',
  styleUrls: ['./listes-enseignants.page.scss'],
})
export class ListesEnseignantsPage implements OnInit {
  constructor(
    private router: Router,
    private enseignantService: EnseignantService,
    private alertController: AlertController,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
  ) {}

  enseignants = [];
  filtredEnseignants = [];
  ngOnInit() {
    this.enseignantService.getAll().subscribe((res: any) => {
      this.enseignants = res;
      this.filtredEnseignants = res;
    });
  }
  displayMenu(id) {
    this.presentActionSheet(id);
  }
  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Supprimer',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.presentAlertConfirm(id);
          },
        },
        {
          text: 'Modifier',
          icon: 'create-outline',
          handler: () => {
            this.showModal(id);          },
        },
        {
          text: 'Afficher',
          icon: 'eye-outline',
          handler: () => {
            this.router.navigate(["/admin/detail-enseignant",id])
          },
        },
        {
          text: 'Annuler',
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
    this.enseignantService.delete(id).subscribe((res) => {
      if (res != null) {
        let index = this.enseignants.findIndex(d => d.id_enseignant === id); //find index in your array
        if (index > -1) {
          this.enseignants.splice(index, 1);
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
      component: FormEnseignantPage,
      swipeToClose: true,
      componentProps: {
        enseignantId: id,
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
  this.enseignants=[];
this.enseignantService.getAll().subscribe(res=>{this.enseignants=res; this.filtredEnseignants=res;})
//event.target.complete();
    }, 2000);
  }



  searchStudent(data){
    var query=data.target.value;
    if (!query) { // revert back to the original array if no query
      this.filtredEnseignants = [...this.enseignants];
    } else { // filter array by query
      this.filtredEnseignants = this.enseignants.filter((e) => {
        return (e.nom.includes(query) );
      })
    }
   
  }
}
