import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../shared/services/module.service';

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.page.html',
  styleUrls: ['./detail-module.page.scss'],
})
export class DetailModulePage implements OnInit {

  module:any = {};
  id_module;

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id_module = this.route.snapshot.params['id'];
    if (this.id_module != null && this.id_module != "undefined")
    {
      this.moduleService.getById(this.id_module).subscribe((res) => {
        this.module = res;
      });
    } 
    else{
        this.router.navigate(['/admin/listes-modules'])
     }
  }
  

}

