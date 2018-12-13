import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Document } from "./document";

const httpOptions = {
  headers: new HttpHeaders({
    accept: "application/json",
    authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQWRtaW4iLCJleHAiOjI0OTA1NDIxMjAsInVzZXIiOjYsImlhdCI6MTU0NDQ2MjEyMCwidXNlcm5hbWUiOiJhcnJveiJ9.qn0aWXXlh2HmNQwATKWLxY6GCaXBMTOzcXkpYggET3Y"
  })
};
@Injectable()
export class DocumentService {
  url: string = "http://localhost:8080/rest-api-beto/document";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Document[]> {
    return this.http.get<Document[]>(this.url, httpOptions);
  }
}
