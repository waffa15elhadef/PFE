import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../../../shared/services/etudiant.service';

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.page.html',
  styleUrls: ['./detail-module.page.scss'],
})
export class DetailModulePage implements OnInit {

  constructor(private route:ActivatedRoute,private etudiantService:EtudiantService){}

  idSpecialite:number;
  specialite:any={"nom":"MI","modules":[{"id":1,"nom":"BDD"},{"id":2,"nom":"reseau"},{"id":3,"nom":"GL"}]}
  ngOnInit() {
  this.idSpecialite=  this.route.snapshot.params['id']
 
  }
}
