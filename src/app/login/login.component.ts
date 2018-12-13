import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: string;
  senha: string;

  token: string;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  mouseOver: boolean = false;

  public mousePassou() {
    this.mouseOver = !this.mouseOver;
  }

  public auth() {
    this.loginService
      .login(this.login, this.senha)
      .subscribe(
        (res: string) => {
          console.log('texto' + res);
          this.token = res
          
        },
        error => console.log(error),
        () => console.log('token' + this.token)
      );
  }
}
