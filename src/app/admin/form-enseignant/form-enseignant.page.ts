import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-enseignant',
  templateUrl: './form-enseignant.page.html',
  styleUrls: ['./form-enseignant.page.scss'],
})
export class FormEnseignantPage implements OnInit {

  constructor() { }
roles=['admin','enseignant','etudiant'];
  ngOnInit() {
  }

}
