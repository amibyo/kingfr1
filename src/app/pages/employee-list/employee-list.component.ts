import { Observable } from 'rxjs';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }
  list() {
    this.router.navigate(['create']);
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


