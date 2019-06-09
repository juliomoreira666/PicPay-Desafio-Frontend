import { Pagamento } from "./../../service/app.model";
import { Component, OnInit, Input } from "@angular/core";
import { Users, Card } from "src/app/service/app.model";
import { SharedService } from "src/app/service/shared.service";

@Component({
  selector: "app-pagamento-cadastro",
  templateUrl: "./pagamento-cadastro.component.html",
  styleUrls: ["./pagamento-cadastro.component.css"]
})
export class PagamentoCadastroComponent implements OnInit {
  moneyPost: number;
  sucesso: boolean;
  erro: boolean;
  public cartao: Card;
  loading: boolean;
  @Input() user = new Users();
  post = new Pagamento();
  constructor(private data: SharedService) {}
  ngOnInit() {
    this.data.cartaoSelecionado.subscribe(cartao => (this.cartao = cartao));
    // console.log(this.user);
  }
  pagar(userId: number, cardData: Card) {
    this.erro = false;
    this.loading = true;
    this.sucesso = false;
    let json: Pagamento = {
      destination_user_id: userId,
      card_number: cardData.numero,
      value: this.moneyPost,
      cvv: cardData.codigo,
      expiry_date: cardData.validade
    };
    this.data.pagamento(json).subscribe(
      res => {
        this.sucesso = true;
        this.loading = false;
        console.log("POST", res);
      },
      error => {
        this.erro = true;
        this.loading = false;
        console.log("ERRO", error);
      },
      () => {}
    );
  }
  booleanSuccess(): void {
    this.sucesso = false;
  }
}
