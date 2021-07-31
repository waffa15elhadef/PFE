import { FormEtudiantPage } from './../form-etudiant/form-etudiant.page';
import { Router } from '@angular/router';
import { EtudiantService } from './../../../../shared/services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.page.html',
  styleUrls: ['./liste-etudiant.page.scss'],
})
export class ListeEtudiantPage implements OnInit {
  etudiants = [];
  etudiantsFiltered=[];
  constructor(
    private modalController: ModalController,
    private etudiantService: EtudiantService,
    private router: Router,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.etudiantService.getAll().subscribe((res) => {
      this.etudiantsFiltered=res;
      this.etudiants = res;
    });
  }
  goToDetails(id) {
    this.router.navigate(['admin/etudiant/details-etudiant', id]);
  }

  showMenu(id) {
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
            this.delete(id);
          },
        },
        {
          text: 'Edit',
          icon: 'create-outline',
          handler: () => {
            this.showModal(id);
          },
        },
        {
          text: 'Displat',
          icon: 'eye-outline',
          handler: () => {
            this.goToDetails(id);
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

  showModal(id) {
    this.presentModal(id);
  }
  async presentModal(id) {
    const modal = await this.modalController.create({
      component: FormEtudiantPage,
      swipeToClose: true,
      componentProps: {
        etudiantId: id,
      },
    });

    await modal.present();

    await modal.onDidDismiss().then(() => {
      this.etudiantService.getAll().subscribe((res) => {
        this.etudiants = res;
      });
    });
  }

  delete(id) {
    this.etudiantService.delete(id).subscribe((res) => {
      console.log(res);
      this.etudiantService.getAll().subscribe((etudiants) => {
        this.etudiants = etudiants;
      });
    });
  }
  searchStudent(data){
    var query=data.target.value;
    if (!query) { // revert back to the original array if no query
      this.etudiantsFiltered = [...this.etudiants];
    } else { // filter array by query
      this.etudiantsFiltered = this.etudiants.filter((etudiant) => {
        return (etudiant.name.includes(query) );
      })
    }
   
  }


  
}
