import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { EnseignantService } from '../shared/services/enseignant.service';
import { AuthentificationService } from '../shared/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit { 
  constructor(private enseignantService:EnseignantService,private route:Router,private menu: MenuController,private authentificationService:AuthentificationService) { }
role;
id;
  ngOnInit(){
    this.authentificationService.role.subscribe(res=>{
      this.role=res;    })
      this.authentificationService.userId.subscribe(res=>{
        this.id=res;    })
        this.role=1; 
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
         this.enseignantService.getByUserId(this.id).subscribe(res=>{
           console.log(res,"rr")
          this.route.navigate(['admin/detail-enseignant',res.id_enseignant])

         })
       }
  

}
