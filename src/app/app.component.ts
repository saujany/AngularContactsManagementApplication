import { Component, Input,OnInit,ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ReactiveFormsModule, FormGroup, FormsModule,FormControl, Validators, NgForm} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { CommonModule, NgFor } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeeService } from './Services/employee.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,MatInputModule,MatFormFieldModule,MatAutocompleteModule,NgFor,MatDialogModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularMaterial';

  user:users[]=[];
 

  //users: any[]=[
   // {
    //"Id":1,
    //"FirstName":"Saujanya",
    //"LastName":"Srivastava",
    //"Salary":120000
    //}
  //]
  
  
   

constructor(private _dialogref:MatDialog,private myservice:EmployeeService)
{
  
}

ngOnInit(): void 
{
  

this.getData();
  }
 
        AddorEdit()
        {
          const dialogref=this._dialogref.open(AddEditEmployeeComponent);
          dialogref.afterClosed().subscribe(
            {
              next:(val)=>
              {
                if(val)
                {
                  this.getData();
                }
              },
              error:(error:any)=>
                {
                  alert("some error")
                }
            }
          )
          
                  
        }


        EditData(data:any)
        {
          this._dialogref.open(AddEditEmployeeComponent,
          {
            data,
          });
          
        }
      

        DeleteData(id:number)
        {
          this.myservice.deletedeveloperData(id).subscribe(
            {
              next:(data:any)=>
                {
                  alert("Developer data deleted")
                  console.log(data);
                  this.getData();
                 
        },
        error:(error:any)=>
          {

          }
          

        })
                
      }
      
            getData()
        {

        
          this.myservice.getdeveloperData().subscribe((data:any[])=>
            {
              //next:(data:any[])=>
               // {
                              
                 
                  this.user=data;
                 
                  
              //  },
            });
      
          }
                            
      
}
export interface users{
  id:number,
  name:string,
  username:string,
  email:string
}
