import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileServiceService } from 'src/app/user-management/services/profile-service.service';
import { Role } from '../../../interfaces/Role';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  fields:any;
  roles:Role[];
  profileForm :FormGroup;
  constructor(private profileService: ProfileServiceService,private _fb: 
    FormBuilder) { }

  ngOnInit(): void {
    this.fields={
      role:[{
        id:1
      }]
    };
    this.getAllRoles()
    this.formProfile();
    //this.patch();
  }
   
   formProfile(){
     this.profileForm=this._fb.group({
      name:['',[Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      description:['',[Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
     // role:this._fb.array([])
     })
   }

  //agrupar id con valor
  /*patch(){
    const control = <FormArray>this.profileForm.get('role');
     this.fields.role.forEach(element => {
       control.push(this.patchValues(element.id))
     });
  }

  patchValues(id){
    return this._fb.group({
      id:[id]
    })
    
  }*/


   //llamadas al api
  getAllRoles(){
    this.profileService.getRole().subscribe(
      (response)=>{
        console.log(response)
        this.roles=response;
      }
     
    )
  }  
  campoNoValido(campo: string) {
    return  this.profileForm .get(campo)?.errors &&  this.profileForm.get(campo)?.touched && this.profileForm.get(campo)?.invalid;
  }
  submit(){console.log(this.profileForm.value)}
}
