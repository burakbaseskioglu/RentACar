import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentResponseModel } from 'src/app/models/rentResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiUrl = "https://localhost:44392/api/rental/getrentdetails";
  constructor(private httpClient: HttpClient) { }

  getRentDetails(): Observable<RentResponseModel> {
    return this.httpClient.get<RentResponseModel>(this.apiUrl);
  }
}