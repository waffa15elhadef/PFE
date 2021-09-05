import { ModuleService } from '../../../shared/services/module.service';
import { SpecialiteService } from './../../../shared/services/specialite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.page.html',
  styleUrls: ['./detail-module.page.scss'],
})
export class DetailModulePage implements OnInit {

  constructor(private route:ActivatedRoute,private moduleService:ModuleService){}

  idSpecialite:number;
  ngOnInit() {
  this.idSpecialite=  this.route.snapshot.params['id']
 this.moduleService.getModuleBySpecialite(this.idSpecialite).subscribe(res=>{
   console.log(res)
 })
  }
}
