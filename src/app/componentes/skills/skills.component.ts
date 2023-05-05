import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillsList: any;
  name: string;
  progress: number;
  public inputId: any = "";
  public inputId2: any = "";
  isLogged = false;

  constructor(private datosPorfolio: PortfolioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.skillsList = data[0].tecnologia;
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  enviarHabilidad() {
    this.datosPorfolio
      .nuevaHabilidad('https://backendportfolio-mdw1.onrender.com/new/tecnologia', {
        "id": "",
        "name": this.name,
        "progress": this.progress,
        "personaId": 1,
      })
      .subscribe((respuesta) => {
        console.log('Habilidad enviada!');
      });
    if (true) {
      alert('Habilidad cargada!');
      window.location.reload();
    }
  }

  editarHabilidad(id: any) {
    this.datosPorfolio
      .editarHabilidad('https://backendportfolio-mdw1.onrender.com/editar/tecnologia/' + id, {

        "id": this.inputId,
        "name": this.name,
        "progress": this.progress,
        "personaId": 1,
      })
      .subscribe((respuesta) => {
        console.log('Habilidad enviada!');
      });
    if (true) {
      alert('Habilidad cargada!');
      window.location.reload();
    }
  }

  borrarHabilidad(id: any) {
    this.datosPorfolio.borrarHabilidad('https://backendportfolio-mdw1.onrender.com/borrar_tecnologia/' + id, {})
      .subscribe(respuesta => {
        console.log("Tecnologia borrada!")
      });
  }

  ponerid(id: any) {
    this.inputId = id;
    console.log(this.inputId);
    return this.inputId;
  }

  mostrar(param: any) {
    let cambiar = document.getElementById(param);
    this.inputId2 = this.inputId2 + 1000;
    return this.inputId2;
  }

  cancelar(param: any) {
    let cambiar = document.getElementById(param);
    this.inputId = this.inputId - 1000;
    return this.inputId2;
  }

  recargar() {
    window.location.reload();
  }

}
