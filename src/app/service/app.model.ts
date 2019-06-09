export class Users {
  public id: number;
  public name: string;
  public username: string;
  public img: string;
}
export class Card {
  public numero?: string;
  public bandeira?: string;
  public nomeEscrito?: string;
  public validade?: string;
  public codigo?: number;
  public cep?: number;
}
export class Pagamento {
  // tslint:disable-next-line: variable-name
  public card_number: string;
  public cvv: number;
  public value: number;
  // tslint:disable-next-line: variable-name
  public expiry_date: string;
  // tslint:disable-next-line: variable-name
  public destination_user_id: number;
}
