import { EtudiantService } from './../../../../shared/services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-etudiant',
  templateUrl: './details-etudiant.page.html',
  styleUrls: ['./details-etudiant.page.scss'],
})
export class DetailsEtudiantPage implements OnInit {

  constructor(private route:ActivatedRoute,private etudiantService:EtudiantService){}

  idEtudiant:number;
  etudiant:any={}
  ngOnInit() {
  this.idEtudiant=  this.route.snapshot.params['id']
  if(this.idEtudiant!=null && this.idEtudiant!= undefined)
this.etudiantService.getById(this.idEtudiant).subscribe(res=>{
  this.etudiant=res;
})
  }

}
