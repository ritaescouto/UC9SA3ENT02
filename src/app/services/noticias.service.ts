import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from '../models/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url= "http://localhost:3000/noticias"

  constructor(private httpclient: HttpClient) { }

  getNoticias(): Observable<Noticias[]>{
    return this.httpclient.get<Noticias[]>(this.url)
  }
}
