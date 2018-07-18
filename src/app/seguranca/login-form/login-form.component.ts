import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private auth: AuthService,
              private erroHandler: ErrorHandlerService,
              private router: Router) { }

  ngOnInit() {
  }

  login(usuario: string, senha: string) {
       this.auth.login(usuario, senha)
       .then(() => {
        this.router.navigate(['/usuarios']);
      })
       .catch(erro => {
         this.erroHandler.handle(erro);
       });

  }

}
