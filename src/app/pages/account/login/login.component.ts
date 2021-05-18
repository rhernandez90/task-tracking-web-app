import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/authentication/login/login.service';
import { TokenStorageService } from '../../../Services/authentication/TokenStorage/token-storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private _authService : LoginService,
    private _tokenStorage : TokenStorageService
  ) { 

  }

  ngOnInit(): void {
    if (this._tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this._tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this._authService.login(username, password).subscribe(
      data => {
        this._tokenStorage.saveToken(data.token);
        this._tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this._tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
