import { Card } from "./../../service/app.model";
import { Component, OnInit, Output } from "@angular/core";
import { UtilsService } from "src/app/utils/utils.service";
import { SharedService } from "src/app/service/shared.service";

@Component({
  selector: "app-cadastro-cartao",
  templateUrl: "./cadastro-cartao.component.html",
  styleUrls: ["./cadastro-cartao.component.css"]
})
export class CadastroCartaoComponent implements OnInit {
  cardInLocalStorage: Card[] = [];
  @Output() cartoesCadastrados: Card;
  modalCadastro: boolean;
  constructor(private utils: UtilsService, private service: SharedService) {
    this.cartoesCadastrados = JSON.parse(
      localStorage.getItem("testeCartoes") || "[]"
    );
  }

  ngOnInit() {
    this.modalCadastro = true;
  }
  saveCard(data: Card) {
    console.log(this.cardInLocalStorage);
    let cartoes = JSON.parse(localStorage.getItem("testeCartoes") || "[]");
    cartoes.push({
      numero: data.numero,
      bandeira: data.bandeira,
      nomeEscrito: data.nomeEscrito,
      validade: data.nomeEscrito,
      codigo: data.codigo,
      cep: data.cep
    });
    localStorage.setItem("testeCartoes", JSON.stringify(cartoes));
    this.cartoesCadastrados = JSON.parse(
      localStorage.getItem("testeCartoes") || "[]"
    );
    this.modalCadastro = false;
  }
}
