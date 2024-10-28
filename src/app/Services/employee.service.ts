import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpclient:HttpClient) { }

  //using json server and file is db.json 
  url="http://localhost:3000/developer";
 

  //mock API
  url3="https://dummy-json.mock.beeceptor.com/users";

  
  postdeveloperData(data:any):Observable<any>
  {
    return this._httpclient.post(this.url3,data);
  }

  getdeveloperData():Observable<any>
  {
    

    return this._httpclient.get(this.url3);
    

  }

  deletedeveloperData(id:number):Observable<any>
  {
    return this._httpclient.delete(`${this.url3}/${id}`);

  }

  editdeveloperData(id:number,data:any):Observable<any>
  {
    console.log(data);
    return this._httpclient.put(`${this.url3}/${id}`,data);

  }

}
