import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(private datosPorfolio:PortfolioService){

  }

  ngOnInit(): void{
    /* this.datosPorfolio.obtenerDatos(); */
  }
}
