import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from 'src/app/models/Employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: IEmployee = {email:'', name:''};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.employeeService.addEmployee(form.value).
    then(() => form.reset());
  }

}
