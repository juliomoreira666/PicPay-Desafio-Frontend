import { Component, OnInit, Input } from "@angular/core";
import { Card } from "src/app/service/app.model";
import { Router } from "@angular/router";
import { SharedService } from "src/app/service/shared.service";

@Component({
  selector: "app-lista-cartoes",
  templateUrl: "./lista-cartoes.component.html",
  styleUrls: ["./lista-cartoes.component.css"]
})
export class ListaCartoesComponent implements OnInit {
  @Input() cartoes: Card[];
  cartaoSelecionado: Card;
  disabled: boolean;
  constructor(private route: Router, private service: SharedService) {}

  ngOnInit() {
    this.service.cartaoSelecionado.subscribe(
      data => (this.cartaoSelecionado = data)
    );
    console.log(this.cartaoSelecionado);
  }
  containCards(): boolean {
    if (this.cartoes.length > 0) {
      this.disabled = false;
      return true;
    } else if (this.cartoes.length === 0) {
      this.disabled = true;
      return false;
    }
  }
  clearLocalStorage(): void {
    localStorage.clear();
    this.ngOnInit();
  }
  selectCard(card) {
    this.service.attCard(card);
  }
}
