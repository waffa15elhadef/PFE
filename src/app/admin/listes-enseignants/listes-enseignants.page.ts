import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-listes-enseignants',
  templateUrl: './listes-enseignants.page.html',
  styleUrls: ['./listes-enseignants.page.scss'],
})
export class ListesEnseignantsPage implements OnInit {

  constructor( private actionSheetController:ActionSheetController,private router: Router) { }

  ngOnInit() {
    
  }
  displayMenu(){
    this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
    
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Edit',
          icon: 'create-outline',
          handler: () => {
            console.log('edit clicked');
          },
        },
        {
          text: 'Displat',
          icon: 'eye-outline',
          handler: () => {
            console.log('Play clicked');
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
AjouterEnseignant(){
this.router.navigate(['admin/form-enseignant']);
}

}
