import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _httpclient:HttpClient) {

   }

   getnews():Observable<any>{
    return this._httpclient.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-09-29&sortBy=publishedAt&apiKey=13194da4c1114500a78b58e2e3e11e2b`)
   }
}
