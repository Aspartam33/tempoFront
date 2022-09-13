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

  fields: any;
  profileForm: FormGroup;
  roles: any={};
  constructor(private profileService: ProfileServiceService, private _fb:
    FormBuilder) {}

  ngOnInit(): void {

    this.getAllRoles()
    this.formProfile();
    //this.patch();
  }

  formProfile() {
    this.profileForm = this._fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      description: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      role1:  new FormArray([]),
      role:this._fb.array([])

      
    })
  }

   onChange(event){
       const rol = (this.profileForm.controls['role1'] as FormArray)
       const control = <FormArray>this.profileForm.get('role');
       if(event.target.checked){
        rol.push(new FormControl(event.target.value))

        control.push(this.patchValues(event.target.value))
       }else{
        const index = rol.controls
        .findIndex(x=> x.value === event.target.value);
        rol.removeAt(index)

       }
   }

  patchValues(values){
    return this._fb.group({
      id:[values]
    })
  }

 
  getAllRoles() {
    this.profileService.getRole().subscribe(
      (response) => {
        console.log(response)
        this.roles = response;
      }

    )
  }
  campoNoValido(campo: string) {
    return this.profileForm.get(campo)?.errors && this.profileForm.get(campo)?.touched && this.profileForm.get(campo)?.invalid;
  }
  submit() {
    console.log(this.profileForm.value)
  }
}
                    
             