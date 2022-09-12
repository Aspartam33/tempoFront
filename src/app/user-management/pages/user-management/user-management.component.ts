import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Profile } from '../../interfaces/Profile';
import { Role } from '../../interfaces/Role';
import { User } from '../../interfaces/User';
import { ProfileServiceService } from '../../services/profile-service.service';
import { UserManagementService } from '../../services/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  clienteService: any;
  clientes: any;

  constructor(private profileService: ProfileServiceService, private userService: UserManagementService) { }
  
  profiles:Profile[];
  users:User[];
  ngOnInit(): void {
    this.getProfile()
    this.getUsers();
  }
  toogle:boolean=false;
  toogle2:boolean=false;
  names:string='c';
  clickEvent(event){

    this.toogle = !this.toogle; 
  
  }
  
  clickEvent2(event){
    this.toogle2 = !this.toogle2;
  }
  
  getProfile():void{
    this.profileService.getProfiles().subscribe(
      (response)=>{
        console.log(this.profiles)
        this.profiles=response;
      }
     
    )
  }

  
  getUsers():void{
    this.userService.getUsers().subscribe(
      (response)=>{
        console.log(response);
        this.users=response;
      }

    )
  }

  deleteUser(user:User):void{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
     
      if (result.value) {

        this.userService.delete(user.id).subscribe(
          () => {
            this.users = this.users.filter(cli => cli !== user);
            Swal.fire(
              'Cliente Eliminado!',
              `Cliente ${user.username} eliminado con éxito.`,
              'success'
            );
          }
        );

      }
    });
  }
}

