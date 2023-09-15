import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientModel } from 'src/app/shared/models/client.model';
import { RequestClientModel } from 'src/app/shared/models/requestClient.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = environment.apiUrl;
  
  constructor(
    private http: HttpClient
    ) { }

    get(requestClient: RequestClientModel): Observable<ClientModel[]>{
      return this.http.get<ClientModel[]>(`${this.apiUrl}/client/${requestClient.name}/${requestClient.active}`);
    }

    save(client: ClientModel): Observable<ClientModel>{
      return this.http.post<ClientModel>(`${this.apiUrl}/client/`, client);
    }

    put(client: ClientModel): Observable<ClientModel>{
      return this.http.put<ClientModel>(`${this.apiUrl}/client/`, client);
    }

    disable(client: ClientModel): Observable<String>{
      return this.http.put<String>(`${this.apiUrl}/client/disable`, client);
    }


}
