import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  miPorfolio:any="";
  constructor(private datosPorfolio:PortfolioService){}

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
     this.miPorfolio=data[0];
    });
   }
}
