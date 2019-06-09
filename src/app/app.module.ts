import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ListaUsuariosComponent } from "./components/lista-usuarios/lista-usuarios.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PagamentoCadastroComponent } from "./components/pagamento-cadastro/pagamento-cadastro.component";
import { CadastroCartaoComponent } from "./components/cadastro-cartao/cadastro-cartao.component";
import { ListaCartoesComponent } from "./components/lista-cartoes/lista-cartoes.component";
import { NgxMaskModule, IConfig } from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaUsuariosComponent,
    HeaderComponent,
    PagamentoCadastroComponent,
    CadastroCartaoComponent,
    ListaCartoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
