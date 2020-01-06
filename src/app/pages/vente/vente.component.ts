import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../../employee.service';
import { Employee } from '../../employee';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {
  employees: Observable<Employee[]>;
  cat2: Observable<Employee[]>;
  cat3: Observable<Employee[]>;
  cat4: Observable<Employee[]>;
  cat5: Observable<Employee[]>;
  cat6: Observable<Employee[]>;
  private router: Router;
  constructor(router: Router, private employeeService: EmployeeService) {
    this.router = router;
  }

  ngOnInit() {
    this.reloadData();
    this.reloadData2();
    this.reloadData3();
    this.reloadData4();
    this.reloadData5();
    this.reloadData6();
  }
  reloadData() {
    this.employees = this.employeeService.getcatarticle('Accessoire Informatique');
  }
  reloadData2() {
    this.cat2 = this.employeeService.getcatarticle('Accessoire GSM');
  }
  reloadData3() {
    this.cat3 = this.employeeService.getcatarticle('Piece Informatique');
  }reloadData4() {
    this.cat4 = this.employeeService.getcatarticle('Piece GSM');
  }
  reloadData5() {
    this.cat5 = this.employeeService.getcatarticle('Materiels Occasion');
  }
  reloadData6() {
    this.cat6 = this.employeeService.getcatarticle('Autre');
  }

}
