import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from "./categoria";

const httpOptions = {
  headers: new HttpHeaders({
    accept: "application/json",
    authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQWRtaW4iLCJleHAiOjI0ODc3ODkxMzIsInVzZXIiOjEsImlhdCI6MTU0MTcwOTEzMiwidXNlcm5hbWUiOiJhZG1pbiJ9.NmXAt0_6JrI_hmdurWpLUHciPgbqWwDhiXGRddYAk6E"
  })
};

@Injectable()
export class CategoriaService {
  url: string = "http://localhost:8080/rest-api-beto/categoria";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url, httpOptions);
  }
}
