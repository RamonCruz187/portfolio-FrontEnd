import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

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

  constructor(private datosPorfolio: PortfolioService) { }

  ngOnInit(): void {}

}
