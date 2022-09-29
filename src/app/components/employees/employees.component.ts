import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/Employee.model';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgModel } from '@angular/forms';
import { EditEmployeeComponent } from 'src/app/modal/edit-employee/edit-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: IEmployee[] = [];

  constructor(private firestore: Firestore,
    private employeeService: EmployeeService,
    private modal: NgbModal){}


  ngOnInit() {
    this.employeeService.getEmpoyees().subscribe((res: IEmployee[]) => {
      this.employees= res;
    })
  }
  editModal(employee: IEmployee) {
    const modalRef = this.modal.open(EditEmployeeComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });

    modalRef.componentInstance.id = employee.id;
  }

  deleteEmployee(employee: IEmployee) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(employee).then(() => 
       console.log('delete successful'));
    }
  }

}
