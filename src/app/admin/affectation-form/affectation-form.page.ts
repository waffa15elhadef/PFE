import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affectation-form',
  templateUrl: './affectation-form.page.html',
  styleUrls: ['./affectation-form.page.scss'],
})
export class AffectationFormPage implements OnInit {

  constructor() { }
modules=["Module 1","Module 2","module 3"]
enseignants=["Enseignant 1","Enseignant 2","Enseignant 3"]
  ngOnInit() {
  }

}
