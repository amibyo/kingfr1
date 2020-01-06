import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  constructor(private employeeService: EmployeeService,
              private router: Router) { }
  optionsSelect: Array<any>;
  ngOnInit() {
  }
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
  retour() {
    this.router.navigate(['article']);
  }
  recherche() {
    this.router.navigate(['recherche']);
  }
  list() {
    this.router.navigate(['article']);
  }
  create() {
    this.router.navigate(['create']);
  }
  vente() {
    this.router.navigate(['vente']);
  }
}
