import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsList:any;
  constructor(private datosPorfolio:PortfolioService){

  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.skillsList = data.aptitudes;
      
    })
   
  }
}
