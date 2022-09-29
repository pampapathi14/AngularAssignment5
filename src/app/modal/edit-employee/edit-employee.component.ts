import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IEmployee } from 'src/app/models/Employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  @Input() id: string;
  employee: IEmployee;

  constructor(private employeeService : EmployeeService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.id)
        this.employeeService.getEmployeeByID(this.id).subscribe(res =>{
          this.employee = res;

        });
  }
  
  onUpdate() {
    this.employeeService.updateEmployee(this.employee).then(() => {
      this.activeModal.close();
      console.log('Data add successfully');
    })
  }
}
