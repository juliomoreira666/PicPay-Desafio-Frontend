import { OnInit, Component, Output } from "@angular/core";
import { Users } from "./../../service/app.model";
import { SharedService } from "src/app/service/shared.service";
@Component({
  selector: "app-lista-usuarios",
  templateUrl: "./lista-usuarios.component.html",
  styleUrls: ["./lista-usuarios.component.css"]
})
export class ListaUsuariosComponent implements OnInit {
  @Output() usuario: Users;
  user: Users[] = [];
  error: any;
  constructor(private service: SharedService) {}

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.service.getUsers().subscribe(
      (data: Users[]) => {
        this.user = data;
        console.log(this.user);
      },
      error => {
        this.error = error;
      },
      () => {}
    );
  }
  obtainData(data: Users) {
    this.usuario = data;
  }
}
