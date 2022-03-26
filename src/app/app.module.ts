import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; //import de rotas
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

//componentes criado no projeto
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroEmpresasComponent } from './cadastro-empresas/cadastro-empresas.component';
import { ConsultaEmpresasComponent } from './consulta-empresas/consulta-empresas.component';
import { EdicaoEmpresasComponent } from './edicao-empresas/edicao-empresas.component';

//mapeando as rotas do projeto para cada componente
const routes: Routes = [
  { path: '', component: PaginaInicialComponent },//raiz do projeto
  { path: 'cadastro-empresas', component: CadastroEmpresasComponent },
  { path: 'consulta-empresas', component: ConsultaEmpresasComponent },
  { path: 'edicao-empresas/:id', component: EdicaoEmpresasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CadastroEmpresasComponent,
    ConsultaEmpresasComponent,
    EdicaoEmpresasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), //registrando as rotas do projeto
    FormsModule, //desenvolvimento de formularios
    ReactiveFormsModule, //desenvolvimento de formulário
    HttpClientModule, //integração com serviços de API
    NgxPaginationModule, //biblioteca para paginação de dados
    Ng2SearchPipeModule //biblioteca para filtro de busca
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
