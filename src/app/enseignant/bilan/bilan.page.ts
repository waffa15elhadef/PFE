import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.page.html',
  styleUrls: ['./bilan.page.scss'],
})
export class BilanPage implements OnInit {

  constructor() { }
  specialites=[{"id":1,"nom":"MI"},{"id":2,"nom":"SI"},{"id":3,"nom":"ISIA"}]
  ngOnInit() {
  }

}
