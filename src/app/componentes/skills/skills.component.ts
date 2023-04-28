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
  public inputId: any="";
  public inputId2: any="";

  constructor(private datosPorfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.skillsList = data[0].tecnologia;
    });
  }

  enviarHabilidad() {
    this.datosPorfolio
      .nuevaHabilidad('http://localhost:8080/new/tecnologia', {
       
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
      .editarHabilidad('http://localhost:8080/editar/tecnologia/'+id, {
       
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

  borrarHabilidad(id: any){
    this.datosPorfolio.borrarHabilidad('http://localhost:8080/borrar_tecnologia/'+id, {})
    .subscribe(respuesta =>{
      console.log("Tecnologia borrada!")
    });

   }

   ponerid(id: any){
    this.inputId=id;
    console.log(this.inputId);
    return this.inputId; 
    
   }
   
   mostrar(param: any){
    let cambiar= document.getElementById(param);
    this.inputId2=this.inputId2+1000;
   return this.inputId2;
    }

  cancelar(param: any) {
  let cambiar= document.getElementById(param);
    this.inputId=this.inputId-1000;
   return this.inputId2;
    }
  
  recargar(){
    window.location.reload();
  }

}
