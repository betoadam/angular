import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Document } from "./document";
import { catchError } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    accept: "application/json",
    authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQWRtaW4iLCJleHAiOjI0ODc3ODkxMzIsInVzZXIiOjEsImlhdCI6MTU0MTcwOTEzMiwidXNlcm5hbWUiOiJhZG1pbiJ9.NmXAt0_6JrI_hmdurWpLUHciPgbqWwDhiXGRddYAk6E"
  })
};
@Injectable()
export class DocumentService {
  url: string = "http://localhost:8080/rest-api-beto/document";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Document[]> {
    return this.http.get<Document[]>(this.url, httpOptions);
  }

  Save(document: Document): Observable<Document> {
    console.log(document);
    return this.http
      .post<Document>(this.url, document, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json() || "Server error");
  }
}