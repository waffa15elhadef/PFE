import { Router } from '@angular/router';
import { AuthentificationService } from 'src/shared/services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private route:Router,private menu: MenuController,private authentificationService:AuthentificationService) { }
role;
id;
  ngOnInit(){
    this.authentificationService.role.subscribe(res=>{
      this.role=res;    })
      this.authentificationService.userId.subscribe(res=>{
        this.id=res;    })
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
logout(){
  this.authentificationService.logout();

}
       goToDetails(){
        this.route.navigate(['admin/detail-enseignant',this.id])
       }
  

}
