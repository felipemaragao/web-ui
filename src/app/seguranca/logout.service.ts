import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';
import { AdvocatoHttp } from './advocato-http';

@Injectable()
export class LogoutService {

  tokensRenokeUrl: string;

  constructor(
    private http: AdvocatoHttp,
    private auth: AuthService
  ) {
    this.tokensRenokeUrl = `${environment.apiUrl}/tokens/revoke`;
  }

  logout() {
    return this.http.delete(this.tokensRenokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
      });
  }

}
