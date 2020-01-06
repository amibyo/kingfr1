import { Component, OnInit } from '@angular/core';
import {Maintenance} from '../../maintenance';
import {MaintenanceService} from '../../maintenance.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-detail-maintenance',
  templateUrl: './detail-maintenance.component.html',
  styleUrls: ['./detail-maintenance.component.scss']
})
export class DetailMaintenanceComponent implements OnInit {

  id: number;
  maintenance: Maintenance;

  constructor(private route: ActivatedRoute, private router: Router,
              private maintenanceService: MaintenanceService) { }

  ngOnInit() {
    this.maintenance = new Maintenance();

    this.id = this.route.snapshot.params['id'];

    this.maintenanceService.getmaintenance(this.id)
      .subscribe(data => {
        console.log(data)
        this.maintenance = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['create']);
  }
  cat() {
    this.router.navigate(['Cat']);
  }
  recherche() {
    this.router.navigate(['recherche']);
  }
  vente() {
    this.router.navigate(['vente']);
  }
  retour() {
    this.router.navigate(['article']);
  }
}
