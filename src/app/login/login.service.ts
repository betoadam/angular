import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    accept: "text/html",
    authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQWRtaW4iLCJleHAiOjI0ODc3ODkxMzIsInVzZXIiOjEsImlhdCI6MTU0MTcwOTEzMiwidXNlcm5hbWUiOiJhZG1pbiJ9.NmXAt0_6JrI_hmdurWpLUHciPgbqWwDhiXGRddYAk6E"
  })
};

@Injectable()
export class LoginService {
  url: string = "http://localhost:8080/rest-api-beto/login";

  constructor(private http: HttpClient) {}


  public login(email: string, senha: string): Observable<string> {
    const body = { 'username': email, 'password': senha };

    return this.http.post<string>(this.url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json() || "Server error");
  }
}
