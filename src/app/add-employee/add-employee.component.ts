import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeDetails: any = {};
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private employeeService: CommonServiceService,
    private _snackBar: MatSnackBar) { }
  fileToUpload: any = {};
  ngOnInit(): void {
    this.employeeDetails.imgSrc = this.employeeDetails.imgSrc ? this.employeeDetails.imgSrc : './../assets/image/Default.jpeg';
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  addEployee() {
    this.employeeDetails.imgSrc =  './../assets/image/Default.jpeg';
    this.employeeService.addEmployeeObj.next(this.employeeDetails);
    this.openSnackBar();
  }
  openSnackBar() {
    this.employeeDetails = {};
    this.employeeDetails.imgSrc =  './../assets/image/Default.jpeg';
    this._snackBar.open('New Employee', ' Added Sucessfully', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
