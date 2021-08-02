import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantService } from 'src/shared/services/enseignant.service';

@Component({
  selector: 'app-detail-enseignant',
  templateUrl: './detail-enseignant.page.html',
  styleUrls: ['./detail-enseignant.page.scss'],
})
export class DetailEnseignantPage implements OnInit {
  enseignant:any = {};
  id_enseignant;

  constructor(
    private route: ActivatedRoute,
    private enseignantService: EnseignantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id_enseignant = this.route.snapshot.params['id'];
    if (this.id_enseignant != null && this.id_enseignant != "undefined")
    {
      this.enseignantService.getById(this.id_enseignant).subscribe((res) => {
        this.enseignant = res;
      });
    } 
    else{
this.router.navigate(['/admin/listes-enseignants'])
     }
  }
}
