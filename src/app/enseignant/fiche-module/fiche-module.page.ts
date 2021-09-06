import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../../../shared/services/etudiant.service';

@Component({
  selector: 'app-fiche-module',
  templateUrl: './fiche-module.page.html',
  styleUrls: ['./fiche-module.page.scss'],
})
export class FicheModulePage implements OnInit {

module={"id":1,"chapitres":[
  {"id":1,"nom":"chapitre 1","realise":true},
  {"id":2,"nom":"chapitre 2","realise":true},
  {"id":3,"nom":"chapitre 3","realise":true},
  {"id":4,"nom":"chapitre 4","realise":false},
]}
taux="";
constructor(private route:ActivatedRoute){}

idModule:number;
ngOnInit() {
this.idModule=  this.route.snapshot.params['id']
this.calculerTauxAvanement()
}


calculerTauxAvanement(){
  length = this.module.chapitres.filter(function(item){
    return item.realise;
  }).length;
console.log("length:",length)
this.taux=length/this.module.chapitres.length * 100 +"%";
}
}
