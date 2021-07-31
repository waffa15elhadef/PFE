import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.page.html',
  styleUrls: ['./form-module.page.scss'],
})
export class FormModulePage implements OnInit {

  constructor() { }
specialites=["IL","ISIA","1ere MATH & INFO"]
enseignants=["Enseignant 1","Enseignant 2"]
chapitres = ['Ionic', 'Angular', 'TypeScript'];
 
ngOnInit() {
    // module: {
    //   "intitule":"base de données",
    //   "coef":5,
    //   "specialite":1,
    //   "Chapitres":["chaitre 1 : intro", "chapiter 2: tetststs"]
    //   "insert into module values:(intitule, coef, specialite)"--->200
    //   insert into chapitre values ( "chapitre 1",id modue)
    // }
  }

  onChange(event){
    console.log(this.chapitres);
    
  }
}
