import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  empForm!: FormGroup;
  constructor(public formBuilder: FormBuilder, public api : EmployeeService) {}

  ngOnInit(): void {
    this.empForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      Gender: ['', Validators.required],
      MaritalStatus: ['', Validators.required],
      BirthDate: ['', Validators.required],
      Hobbies: ['', Validators.required],
      Photo: [''],
      Salary: [0,[ Validators.required,Validators.min(5000)]],
      Address: ['', Validators.required],
      Country: ['', Validators.required],
      State: ['', Validators.required],
      City: ['', Validators.required],
      ZipCode: [0, [Validators.required,Validators.minLength(6)]],
      Password: ['', [Validators.required, Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
    });
  }


  addEmployee= ()=>{
    if(this.empForm.valid){
      this.api.addEmp(this.empForm.value).subscribe((res)=>{
        console.log(res)
      })
    }
  }
}
