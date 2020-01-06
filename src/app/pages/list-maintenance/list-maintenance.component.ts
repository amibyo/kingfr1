import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Maintenance} from '../../maintenance';
import {MaintenanceService} from '../../maintenance.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-maintenance',
  templateUrl: './list-maintenance.component.html',
  styleUrls: ['./list-maintenance.component.scss']
})
export class ListMaintenanceComponent implements OnInit {
  maintenance: Observable<Maintenance[]>;

  constructor(private maintenenceService: MaintenanceService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.maintenance = this.maintenenceService.getmaintenanceList();
  }

  deletemaint(id: number) {
    this.maintenenceService.deletemaintenance(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  maintenenceDetails(id: number) {
    this.router.navigate(['detailm', id]);
  }

  updatemaint(id: number) {
    this.router.navigate(['updatem', id]);
  }
  cat() {
    this.router.navigate(['cat']);
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


