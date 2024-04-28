import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable'; // Importing Observable from 'rxjs/internal/Observable' for handling asynchronous data streams
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importing HttpClient and HttpHeaders from '@angular/common/http' for making HTTP requests

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private BaseUrl: string = 'https://localhost:7276/api/'; // Setting the base URL for API requests
constructor(private httpClient: HttpClient) { }

  loginUser(endpoint: string, data: Object): Observable<any> {
    return this.httpClient.post<any>(this.BaseUrl + endpoint, data); // Making a POST request to login endpoint
  }

    // Method for sending a registration request
    registerUser(endpoint: string, data: Object): Observable<any> {
      return this.httpClient.post<any>(this.BaseUrl + endpoint, data); // Making a POST request to register endpoint
    }
    
    forgotPassword(endpoint: string, data: Object): Observable<any> {
      return this.httpClient.post<any>(this.BaseUrl + endpoint, data); // Making a POST request to forgot password endpoint
    };
    resetPassword(endpoint: string, data: Object): Observable<any> {
      return this.httpClient.post<any>(this.BaseUrl + endpoint, data);
    }

}
