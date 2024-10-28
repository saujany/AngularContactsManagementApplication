import { Component,Inject,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog,MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FormGroup,FormControl,ReactiveFormsModule, NgForm, Validators, FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import{ MatRadioButton,MatRadioGroup} from '@angular/material/radio';
import{MatCheckboxModule} from '@angular/material/checkbox';
import { NgFor } from '@angular/common';
import{MatButtonModule} from '@angular/material/button';
import { EmployeeService } from '../Services/employee.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-edit-employee',
  standalone: true,
  imports: [CommonModule,MatButtonModule,NgFor,MatDialogTitle,MatDialogModule,FormsModule,ReactiveFormsModule,MatFormField,MatInputModule,MatSelect,MatOption,MatRadioButton,MatRadioGroup,MatCheckboxModule],
  templateUrl: './add-edit-employee.component.html',
  styleUrl: './add-edit-employee.component.css'
})
export class AddEditEmployeeComponent implements OnInit{
myfrm: FormGroup;



         constructor(private _myservice:EmployeeService,private _mydialogRef:MatDialogRef<AddEditEmployeeComponent>
          ,@Inject(MAT_DIALOG_DATA)public data:any)
         {
           
               this.myfrm=new FormGroup(
                 {
                   
                   id:new FormControl("",Validators.required),
                   name:new FormControl("",Validators.required),
                   username:new FormControl("",Validators.required),
                   email:new FormControl("",[Validators.required,Validators.email]),
                   
                 
                 }
               )
               
             
           }

         ngOnInit():void
         {

          this.myfrm.patchValue(this.data);

         }

OnSubmit()
{
  //debugger;
//console.log(this.myfrm.value);

if(this.myfrm.valid)
{
  if(this.data)
  {

    this._myservice.editdeveloperData(this.data.id,this.myfrm.value).subscribe(

      {
        next:(data:any)=>
        {
          alert("data updated successfully");
          this._mydialogRef.close(true);
      
        },
        error:(error:any)=>
        {
          console.error("some error");
      
        }
      });
  }


  else
  {
  
this._myservice.postdeveloperData(this.myfrm.value).subscribe(

{
  next:(data:any)=>
  {
    alert("data insrted successfully");
    this._mydialogRef.close(true);

  },
  error:(error:any)=>
  {
    console.error("some error");

  }
});

}
}
}
}


export interface users{
  id:number,
  firstName:string,
  lastName:string,
  email:string

}