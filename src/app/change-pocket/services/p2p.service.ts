import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class P2pService {

  p2pGetUrl = 'http://localhost:8080/p2p';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(
    private http: HttpClient,
    private router: Router) { }

  private isNotAuthorized(e): boolean {
    if (e.status === 401 || e.status === 403) {
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.p2pGetUrl).pipe(
      catchError(e => {
        console.log(e);
        this.isNotAuthorized(e);
        return throwError(e);
      })
    );
  }

  p2pPost(formData: any): Observable<any> {
    return this.http.post(`${base_url}/p2p`, formData, { headers: this.httpHeaders }).pipe(
      catchError(err => {
        Swal.fire('Operación Fallida', err.message, 'error');
        console.log(err);
        return throwError(() => err);
      })
    )
  }
}
