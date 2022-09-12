import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class InternationalCardService {

  icGetUrl = 'http://localhost:8080/ic';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get(this.icGetUrl);
  }

  completePayment(formData:any) : Observable<any>{
    return this.httpClient.post(`${base_url}/ic`,formData,{headers:this.httpHeaders}).pipe(
        catchError(err => {

          //Swal.fire('Operación Fallida',err.error.message, 'error');
          console.log(err);
          return throwError( () => err );
        })

    )
  }
}
