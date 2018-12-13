import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Pessoa } from "./pessoa";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQWRtaW4iLCJleHAiOjI0ODk5MzMxMDgsInVzZXIiOjEsImlhdCI6MTU0Mzg1MzEwOCwidXNlcm5hbWUiOiJhZG1pbiJ9.4pgrsbsB9L9VBbXMw-MXj8Qfo8PIiAQckC2wgpsPsyA"
  })
};

@Injectable()
export class PessoaService {
  url: string = "http://localhost:8080/rest-api-beto/pessoa";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url, httpOptions);
  }

  Save(pessoa: Pessoa): Observable<Pessoa> {
    console.log(pessoa);
    return this.http
      .post<Pessoa>(this.url, pessoa, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
