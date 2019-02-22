import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
  sendEmail(feedback:string, address: string) {
    let params:HttpParams = new HttpParams()
      .set('from', '')
      .set('fromEmail', address)
      .set('message', feedback)
      .set('subject', 'iMAPS Feedback')
      .set('to', '')
      .set('toEmail', 'gis@raleighnc.gov')
    
    return this.http.get('https://openmaps.raleighnc.gov/php/mail.php', {params: params, responseType:'text'}); 
  }
}
