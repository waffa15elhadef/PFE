import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenu-module',
  templateUrl: './contenu-module.page.html',
  styleUrls: ['./contenu-module.page.scss'],
})
export class ContenuModulePage implements OnInit {

  constructor() { }
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];
  ngOnInit() {
  }

}
