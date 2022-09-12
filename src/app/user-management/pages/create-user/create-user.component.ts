import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Profile } from '../../interfaces/Profile';
import { User } from '../../interfaces/User';
import { ProfileServiceService } from '../../services/profile-service.service';
import { UserManagementService } from '../../services/user-management.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  ids_customer: string[] = ["V", "E"]; 
  profiles:Profile[];
  public errores: string[];
 filterParam:any;
  
  constructor(private _fb:FormBuilder,
    public router:Router, private route:ActivatedRoute, 
    private http: HttpClient,
    private profileService: ProfileServiceService,
    private userService:UserManagementService) { }

  usersForm:FormGroup;
  submitted:boolean=false;
  ngOnInit(): void {
    this.getProfile();
    this.createUser();

  }
  
  createUser(){
    this.usersForm=this._fb.group({
      username:['',[ Validators.pattern('^[A-Za-z0-9_]*$')]],
      name:['',[ Validators.pattern('^[a-zA-Z \-\']+')]],
      surname:['',[ Validators.pattern('^[a-zA-Z \-\']+')]],
      typeId: ['', Validators.required],
      numbId: ['', [Validators.required,  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      email:["",[Validators.required, Validators.email]],
      customerid:null,
      profileid:this._fb.group({
        id: ['', Validators.required]
      }),
    })
  }
 
  //validacion de campos
  campoNoValido(campo: string) {
    return  this.usersForm.get(campo)?.errors &&  this.usersForm.get(campo)?.touched && this.usersForm.get(campo)?.invalid;
  }
  //subir
  submitUser(){
    let IdInfo=this.usersForm.get('typeId').value+this.usersForm.get('numbId').value;
    this.usersForm.get('customerid').patchValue(IdInfo);
    

    console.log('this.form', this.usersForm);
    let data:any = this.usersForm.value;
    let queryParams = JSON.stringify(data);
    this.addUser(data);
    
    
  }
  //servicios
  getProfile():void{
    this.profileService.getProfiles().subscribe(
      (response)=>{
        console.log(response)
        this.profiles=response;
      }
     
    )
  }

  addUser(data){
    this.userService.createUser(data).subscribe(
      resp=>{
        Swal.fire('Nuevo usuario creado con éxito', `La contraseña temporal de acceso se ha enviado al correo del usuario`
        , 'success' );
      this.router.navigate(['/gestion-usuario'])
      console.log(resp);
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Código de error desde el backend  ' + err.status);
        console.error(err.error.errors);
      }
    )
  }



}
