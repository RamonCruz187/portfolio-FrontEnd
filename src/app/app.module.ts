import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RecargaDirective } from './directives/recarga.directive';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { InterceptorService } from './servicios/interceptor.service';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'proyectos', component: ProyectosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    RecargaDirective,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [PortfolioService,{
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
