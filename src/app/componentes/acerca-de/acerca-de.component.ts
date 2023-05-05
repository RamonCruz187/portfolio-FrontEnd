import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent {
  miPorfolio: any = '';
  about: any = '';
  isLogged = false;

  constructor(
    private datosPorfolio: PortfolioService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.miPorfolio = data[0];
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  editarEncabezado(id: any) {
    this.datosPorfolio
      .editarEncabezado('https://backendportfolio-mdw1.onrender.com/editar/persona/' + id, {
        id: this.miPorfolio.id,
        name: this.miPorfolio.name,
        position: this.miPorfolio.position,
        ubication: this.miPorfolio.ubication,
        about: this.about,
        logo: this.miPorfolio.logo,
        tel: this.miPorfolio.tel,
        mail: this.miPorfolio.mail,
        image: this.miPorfolio.image,
        backimage: this.miPorfolio.backimage,
        contrasena: this.miPorfolio.contrasena,
      })
      .subscribe((respuesta) => {
        console.log('Acerca de editado!');
      });
    alert('Acerca de editado!');
    window.location.reload();
  }
}
