import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import {contactData} from '../../app/components/aboutus/aboutus.model'
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }

  public AllcontactData(FormData):Observable<any>{
    const data = JSON.stringify(FormData);
    let url=`http://18.222.194.156:97/api/user/savecontactdata`;
    console.log('form contact submitted services page');
    return this.http.post<any>(url,FormData);
  }


}
