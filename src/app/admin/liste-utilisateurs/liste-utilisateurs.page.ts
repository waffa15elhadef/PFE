import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.page.html',
  styleUrls: ['./liste-utilisateurs.page.scss'],
})
export class ListeUtilisateursPage implements OnInit {
  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}
  displayMenu() {
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
}
