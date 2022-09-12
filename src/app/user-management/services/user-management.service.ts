import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  userGetUrl='http://localhost:8080/users'
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient,
    private router: Router) { }

    getUsers():Observable<User[]>{
      return this.http.get<User[]>(this.userGetUrl).pipe(
        
        catchError(e => {
          console.log(e);
        
          return throwError(e);
        })
      );
    }


  createUser(user:User):Observable<User>{
    return this.http.post(this.userGetUrl,user,{headers:this.httpHeaders}).pipe(
      map((respon:any)=>respon.user as User),
      catchError(e => {
        console.log(e);
       
        return throwError(e);
      })
    )
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(`${this.userGetUrl}/${id}`).pipe(
        
      catchError(e => {
        console.log(e);
      
        return throwError(e);
      })
    );
  }

  updateUser(user:User):Observable<User>{

    return this.http.put<User>(`${this.userGetUrl}/${user.id}`,user,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        if(e.status==400){
           return throwError(e);
        }
        if (e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    )
  }

  delete(id:number):Observable<User>{
    return this.http.delete<User>(`${this.userGetUrl}/${id}`).pipe(
      catchError(e => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }
    ));
  }
}
