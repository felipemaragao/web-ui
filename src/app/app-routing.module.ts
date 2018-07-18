import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';

import { UsuarioCadastroComponent } from './usuarios/usuario-cadastro/usuario-cadastro.component';
import { UsuariosPesquisaComponent } from './usuarios/usuarios-pesquisa/usuarios-pesquisa.component';


const routes: Routes = [


  { path: 'api/users', loadChildren: 'app/usuarios/usuarios.module#UsuariosModule' },


  { path: '', redirectTo: 'api/users', pathMatch: 'full' },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent},
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada'}

];


@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule
  ]

})
export class AppRoutingModule { }
