import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http : HttpClient ) { }

public  addEmp =(emp: any)=>{
    return this.http.post('http://localhost:5000/',emp)
}



public  removeEmp =(id: any)=>{
  return this.http.delete(`http://localhost:5000/${id}`)
}
public  getOneEmp =(id: any)=>{
  return this.http.get(`http://localhost:5000/${id}`)
}
public  updateEmp =(id: any,emp:any)=>{
  return this.http.put(`http://localhost:5000/${id}`,emp)
}

public  getEmp =()=>{
  return this.http.get('http://localhost:5000/')
}


}
