import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Endereco } from "./endereco";

const httpOptions = {
  headers: new HttpHeaders({
    accept: "application/json",
    authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQWRtaW4iLCJleHAiOjI0ODc3ODkxMzIsInVzZXIiOjEsImlhdCI6MTU0MTcwOTEzMiwidXNlcm5hbWUiOiJhZG1pbiJ9.NmXAt0_6JrI_hmdurWpLUHciPgbqWwDhiXGRddYAk6E"
  })
};

@Injectable()
export class EnderecoService {
  url: string = "http://localhost:8080/rest-api-beto/endereco";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.url, httpOptions);
  }
}
