import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {
users:IUser[]
  constructor(private httpClient:HttpClient) { }

getAll(): Observable<IUser[]>{
  return this.httpClient.get<IUser[]>(urls.users.base)
}

getById(id:number): Observable<IUser>{
  return this.httpClient.get<IUser>(urls.users.byId(id))
}
}

