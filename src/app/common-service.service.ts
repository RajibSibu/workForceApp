import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  public addEmployeeObj: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }

}
