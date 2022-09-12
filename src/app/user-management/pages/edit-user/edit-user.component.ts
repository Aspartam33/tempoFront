import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { first } from 'rxjs';
import Swal from 'sweetalert2';
import { Profile } from '../../interfaces/Profile';
import { ProfileServiceService } from '../../services/profile-service.service';
import { UserManagementService } from '../../services/user-management.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id:number;
  ids_customer: string[] = ["V", "E"]; 
  profiles:Profile[];
  public errores: string[];
 filterParam:any;
  formData: any;
  
  constructor(private _fb:FormBuilder,
    public router:Router, private route:ActivatedRoute, 
    private http: HttpClient,
    private profileService: ProfileServiceService,
    private userService:UserManagementService) { }

  usersForm:FormGroup;
  submitted:boolean=false;
  ngOnInit(): void {
    this.getProfile();
    //this.editUser();
    this.getUserById();
    this.editUser();
   // this.id = this.route.snapshot.params['id'];

  }
  editUser(){
    this.usersForm=this._fb.group({
      id:[''],
      username:['',[Validators.required, Validators.pattern('^[A-Za-z0-9_]*$')]],
      name:['',[Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      surname:['',[Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      typeId: ['', Validators.required],
      numbId: ['', [Validators.required,  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      email:["",[Validators.required, Validators.email]],
      customerid:null,
      profileid:this._fb.group({
        id: ['', Validators.required]
      }),
    })
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
 
     //validacion de campos
  campoNoValido(campo: string) {
    return  this.usersForm.get(campo)?.errors &&  this.usersForm.get(campo)?.touched && this.usersForm.get(campo)?.invalid;
  }
    getUserById(){
       this.route.params.subscribe(params=>{
        let id=params['id']
        if(id){
          this.userService.getUser(id).pipe(first()).subscribe(x=>this.patchdata(x))
        }
       })
    }
    patchdata(x){
         this.formData=x;
      

        let typeid=x.customerid?.substring(0,1);
        let numbid=x.customerid?.substring(1,9);
         this.usersForm.patchValue({
          id:x.id,
          name:x.name,
          surname:x.surname,
          typeId:typeid,
          numbId:numbid,
          email:x.email,
          username:x.username,
          profileid:{
            id:x.profileid
          }
         })

    }
    submit(){
      console.log(this.usersForm.value)
      let IdInfo=this.usersForm.get('typeId').value+this.usersForm.get('numbId').value;
      this.usersForm.get('customerid').patchValue(IdInfo);
      
  
      console.log('this.form', this.usersForm);
      let data:any = this.usersForm.value;
      let queryParams = JSON.stringify(data);
      this.updateUser(data);
    }

    updateUser(data){
      console.log(data);
      this.userService.updateUser(data)
        .subscribe(
          resp=>{
            this.router.navigate(['/gestion-usuario']);
            Swal.fire('Usuario actualizado con éxito', `La contraseña temporal de acceso se ha enviado al correo del usuario `
        , 'success' );
          },
          err => {
            this.errores = err.error.errors as string[];
            console.error('Código de error desde el backend  ' + err.status);
            console.error(err.error.errors);
          }
        )

    }
}
