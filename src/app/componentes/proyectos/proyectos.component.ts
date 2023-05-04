import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectoList: any;
  public inputId: any = "";
  isLogged = false;

  formProyecto = this.fbProyecto.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    personaId: [1, [Validators.required]],
    urlProyecto: ['', [Validators.required]]
  });

  constructor(private datosPorfolio: PortfolioService, private fbProyecto: FormBuilder, private tokenService: TokenService) {

  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.proyectoList = data[0].proyecto;
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  enviarProyecto() {
    this.datosPorfolio.nuevoProyecto('http://localhost:8080/new/proyecto', {
      "id": this.formProyecto.value.id,
      "nombre": this.formProyecto.value.nombre,
      "descripcion": this.formProyecto.value.descripcion,
      "personaId": 1,
      "urlProyecto": this.formProyecto.value.urlProyecto
    })
      .subscribe(respuesta => {
        console.log("Experinecia enviada!")
      });
    if (true) {
      alert("Experiencia cargada!");
      window.location.reload()
    };
  }

  editarProyecto(id: any) {
    this.datosPorfolio.editarProyecto('http://localhost:8080/editar/proyecto/' + id, {
      "id": this.inputId,
      "nombre": this.formProyecto.value.nombre,
      "descripcion": this.formProyecto.value.descripcion,
      "personaId": 1,
      "urlProyecto": this.formProyecto.value.urlProyecto
    })
      .subscribe(respuesta => {
        console.log("Proyecto editado!");
      });
    alert("Proyecto cargado!");
    window.location.reload();
  }

  borrarProyecto(id: any) {
    this.datosPorfolio.borrarProyecto('http://localhost:8080/borrar_pro/' + id, {})
      .subscribe(respuesta => {
        console.log("Proyecto borrado!")
      });
  }


  ponerid(id: any) {
    this.inputId = id;
    return this.inputId;
  }

  recargar() {
    window.location.reload();
  }
}
