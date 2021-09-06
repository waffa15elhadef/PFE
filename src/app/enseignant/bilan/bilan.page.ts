import { SpecialiteService } from './../../../shared/services/specialite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.page.html',
  styleUrls: ['./bilan.page.scss'],
})
export class BilanPage implements OnInit {
  specialites=[];
  constructor(private specialiteService:SpecialiteService) { }
  ngOnInit() {
this.specialiteService.getAll().subscribe(res=>{this.specialites=res})
  }

}
