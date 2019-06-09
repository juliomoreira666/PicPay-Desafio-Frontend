import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Card } from "./app.model";
@Injectable({
  providedIn: "root"
})
export class SharedService {
  card = new Card();
  public dadosCartao = new BehaviorSubject(this.card);
  cartaoSelecionado = this.dadosCartao.asObservable();
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get("http://careers.picpay.com/tests/mobdev/users");
  }
  public pagamento(pagamento: any): Observable<any> {
    return this.http.post(
      "http://careers.picpay.com/tests/mobdev/transaction",
      pagamento
    );
  }
  attCard(card: Card) {
    this.dadosCartao.next(card);
  }
}
