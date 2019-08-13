import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ImagesService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', responseType: 'text' })
  };
  imageUrl: String;
  apiURL: String = 'https://cors-anywhere.herokuapp.com/dog.ceo/api/breeds/image/random';

  constructor(private httpClient: HttpClient) {}

  public getDogImage(): Observable<any>{
    return this.httpClient.get(`${this.apiURL}`, this.httpOptions);
  }    

}


