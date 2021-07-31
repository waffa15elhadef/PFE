import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-liste-modules',
  templateUrl: './liste-modules.page.html',
  styleUrls: ['./liste-modules.page.scss'],
})
export class ListeModulesPage implements OnInit {
  constructor(private router:Router,private actionSheetController: ActionSheetController) {}

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
  afficherDetailsModule(id){
    this.router.navigate(['admin/detail-module'])

  }
}
