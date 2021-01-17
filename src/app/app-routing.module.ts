import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path : '' , component: EmployeeComponent} ,
{path: 'employees' , component: EmployeeComponent},
{path: 'addEmployee', component: AddEmployeeComponent},
{path: '**' , component: EmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
