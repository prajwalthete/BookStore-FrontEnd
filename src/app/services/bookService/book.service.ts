import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpService: HttpService) { }

  getAllBooks() { 
    console.log("I am in book service");
    return this.httpService.getAllBooks("Books")
  }

  // loginCall(data:object)
  // {
  //  return this.httpService.loginSiginUpCall("User/Login",data)
  // }
}