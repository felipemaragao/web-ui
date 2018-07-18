import { AdvocatoHttp } from './../seguranca/advocato-http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';


import { Usuario } from './../core/model';



export class UsuarioFiltro {
  username: string;
  pagina = 0;
  itensPorPagina = 5;

}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioUrl: string;


  constructor(private http: AdvocatoHttp) {
      this.usuarioUrl = ` ${environment.apiAccount}/api/users`;
    }


  listarTodos(): Promise<any> {

    return this.http.get<any>(this.usuarioUrl)
      .toPromise()
      .then(response => response.content);
  }


   atualizarEmail(usuario: Usuario): Promise<Usuario> {
    return this.http.put<Usuario>(`${this.usuarioUrl}/${usuario.username}`, usuario)
    .toPromise();
   }

  buscarPorCodigo(username: string): Promise<Usuario> {

    return this.http.get<Usuario>(`${this.usuarioUrl}/username/${username}`)
    .toPromise();
  }


  adicionar(usuario: Usuario): Promise<Usuario> {

    return this.http.post<Usuario>(this.usuarioUrl, usuario)
    .toPromise();

  }



  excluir(username: string): Promise<void> {
    return this.http.delete(`${this.usuarioUrl}/${username}`)
      .toPromise()
      .then(() => null);
  }



  resetarSenha(id: number): Promise<void> {
    return this.http.put(`${this.usuarioUrl}/${id}/reset`,
    JSON.stringify(id))
    .toPromise()
    .then(() => null);

  }

  pesquisar(filtro: UsuarioFiltro): Promise<any> {
    let  params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });
    if (filtro.username) {
      params = params.set('username', filtro.username);

    }

    return this.http.get<any>(`${this.usuarioUrl}`,
    { params })
        .toPromise()
        .then(response => {
    const usuarios = response.content;

    const resultado = {
      usuarios,
      total: response.totalElements
    };

    return resultado;
  });
}


}
