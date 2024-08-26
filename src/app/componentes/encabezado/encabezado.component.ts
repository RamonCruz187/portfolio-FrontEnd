import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  

  constructor(private datosPorfolio: PortfolioService,  private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {}

}
