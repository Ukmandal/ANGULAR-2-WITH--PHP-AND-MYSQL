import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Employee } from '../shared/employee';
import { EmpService } from '../shared/emp.service';
@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private empService: EmpService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Employee();
  addEmployee(){
      this.empService
        .addEmployee(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/list']);
  }
}
