import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  miPorfolio:any="";
  constructor(private datosPorfolio:PortfolioService){}

  ngOnInit(): void{
   this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.miPorfolio=data[0];
    console.log(data);
   });
  
  
  }



}
