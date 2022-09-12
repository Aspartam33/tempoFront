import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Profile } from '../interfaces/Profile';
import { Role } from '../interfaces/Role';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
 roleGetURl='http://localhost:8080/role';
 profileGetURl='http://localhost:8080/profile';
 
 private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient,
    private router: Router) { }

    private isNotAuthorized(e): boolean {
      if (e.status === 401 || e.status === 403) {
        this.router.navigate(['/login'])
        return true;
      }
      return false;
    }
    getRole(): Observable<Role[]> {
      return this.http.get<Role[]>(this.roleGetURl).pipe(
        
        catchError(e => {
          console.log(e);
        
          return throwError(e);
        })
      );
    }

    getProfiles():Observable<Profile[]>{
      return this.http.get<Profile[]>(this.profileGetURl).pipe(
        
        catchError(e => {
          console.log(e);
        
          return throwError(e);
        })
      );

    }

    //createProfile():Observable<Profile[]>{}
}

