import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../common-service.service';
import employees from './../../assets/employee.json';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList = employees;
  empDisplayList = [];
  displayEmployee = false;
  employeeDetails: any = {};
  pageIndex = 0;
  empSubscription: Subscription;
   constructor(private employeeService: CommonServiceService) { }
  ngOnDestroy() {
    // setTimeout(() => this.employeeService.addEmployeeObj.unsubscribe(), 3000);
    this.empSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.empSubscription = this.employeeService.addEmployeeObj.subscribe(data => {
      data && (this.employeeList.filter(emp => emp.empId === data.empId).length === 0) ? this.employeeList.push(data) : null;
    });
    this.empDisplayList = this.employeeList && this.employeeList.length > 8 ? this.employeeList.slice(0, 8) : this.employeeList;
  }
  checkEmployeeDetails(emp) {
    this.employeeDetails = emp;
    this.displayEmployee = !this.displayEmployee;
  }
  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.empDisplayList = this.employeeList && this.employeeList.length > 8 ?
      this.employeeList.slice((this.pageIndex * 8), (this.pageIndex * 8) + 8) : this.employeeList;
  }
  updateEmployee() {
    this.employeeList[this.employeeList.indexOf(this.employeeDetails)] = this.employeeDetails;
    this.displayEmployee = !this.displayEmployee;
  }
  removeEmployee() {
    this.employeeList.splice(this.employeeList[this.employeeList.indexOf(this.employeeDetails)], 1);
    this.empDisplayList = this.employeeList.slice(0, 8);
    this.displayEmployee = !this.displayEmployee;
  }

}

