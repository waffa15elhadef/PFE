import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantService } from 'src/shared/services/enseignant.service';

@Component({
  selector: 'app-detail-enseignant',
  templateUrl: './detail-enseignant.page.html',
  styleUrls: ['./detail-enseignant.page.scss'],
})
export class DetailEnseignantPage implements OnInit {
  retour="retour";
  enseignant:any = {};
  id_enseignant;
user:any={};
  constructor(
    private route: ActivatedRoute,
    private enseignantService: EnseignantService,
    private router: Router,
    private userService:UserService
  ) {}

  ngOnInit() {
    this.id_enseignant = this.route.snapshot.params['id'];
    if (this.id_enseignant != null && this.id_enseignant != "undefined")
    {
      this.enseignantService.getById(this.id_enseignant).subscribe((res) => {
        this.enseignant = res;
        this.userService.getById(res.id_utilisateur).subscribe(user=>{
          this.user=user;
        })
      });
    } 
    else{
this.router.navigate(['/admin/listes-enseignants'])
     }
  }
}
