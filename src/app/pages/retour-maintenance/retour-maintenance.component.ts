import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Maintenance} from '../../maintenance';
import {MaintenanceService} from '../../maintenance.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-retour-maintenance',
  templateUrl: './retour-maintenance.component.html',
  styleUrls: ['./retour-maintenance.component.scss']
})
export class RetourMaintenanceComponent implements OnInit {
  maintenance: Observable<Maintenance[]>;

  constructor(private maintenenceService: MaintenanceService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.maintenance = this.maintenenceService.getmaintenanceList();
  }
  maintenencesort(id: number) {
    this.router.navigate(['sortir', id]);
  }

}


