import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "vendor";
const baseUrl: string = "http://localhost:3000";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    };

    postVendor(data): Observable<any> {
        return this.http.post(`${baseUrl}/${apiUrl}`, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    vendorLogin(data): Observable<any> {
        var sub: string = 'login';
        return this.http.post<{ token: string }>(`${baseUrl}/${apiUrl}/${sub}`, { data });
    }
    resetpassword(data): Observable<any> {
        var sub: string = 'forgotpassword';
        return this.http.post(`${baseUrl}/${apiUrl}/${sub}`, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['vendor/login']);
    }

    isAuthenticated() {
        return localStorage.getItem('vendor');
    }
}
