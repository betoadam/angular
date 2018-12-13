import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Keyword } from "./keyword";
import { catchError } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    accept: "application/json",
    authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQWRtaW4iLCJleHAiOjI0ODc3ODkxMzIsInVzZXIiOjEsImlhdCI6MTU0MTcwOTEzMiwidXNlcm5hbWUiOiJhZG1pbiJ9.NmXAt0_6JrI_hmdurWpLUHciPgbqWwDhiXGRddYAk6E"
  })
};

@Injectable()
export class KeywordService {
  url: string = "http://localhost:8080/rest-api-beto/keyword";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(this.url, httpOptions);
  }
  Save(keyword: Keyword): Observable<Keyword> {
    console.log(keyword);
    return this.http
      .post<Keyword>(this.url, keyword, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json() || "Server error");
  }
}
