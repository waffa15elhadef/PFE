import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.page.html',
  styleUrls: ['./affectation.page.scss'],
})
export class AffectationPage implements OnInit {

 

    constructor() { }
    specialites=[{"id":1,"nom":"MI"},{"id":2,"nom":"SI"},{"id":3,"nom":"ISIA"},{"id":3,"nom":"IL"}]
    ngOnInit() {
    }
  
}
