import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.page.html',
  styleUrls: ['./detail-module.page.scss'],
})
export class DetailModulePage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
onClick(){ this.router.navigate(['admin/contenu-module'])

}
}
