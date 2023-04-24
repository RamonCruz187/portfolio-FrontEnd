import { Component, Input, OnInit,} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public showMe:boolean = true;
  public showMe2:boolean = false;
  experienciaList:any;
  public inputId: any="";
  public inputId2: any="";

  constructor(private datosPorfolio:PortfolioService, private fb: FormBuilder, private activatedRoute: ActivatedRoute){
  }
  
  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.experienciaList = data[0].experiencias;
      console.log(this.experienciaList);
      
    });

  }

  mostrar(param: any){
      let cambiar= document.getElementById(param);
      this.inputId2=this.inputId2+1000;
     console.log(this.inputId2);
     return this.inputId2;
  }

  cancelar(param: any) {

    let cambiar= document.getElementById(param);
      this.inputId=this.inputId-1000;
     console.log(this.inputId2);
     return this.inputId2;
  }

  enviarExp(){
    this.datosPorfolio.nuevaExperiencia('http://localhost:8080/new/experiencia', {
     
    "id":"1",
      "company":"Austral",
      "position":"Tecnico Capocscc",
      "personaId":1,
      "img":"",
      "start":"12-12-22",
      "end":"12-12-23",
      "city":"Com. Riv.",
      "tipoEmpleo": "Freelance",
      "tipoJornada":"Part Time",
      
     
     })
    .subscribe(respuesta =>{
      console.log("Experinecia enviada!")
    });window.location.reload();

   }

   editarExp(id: any){
    this.datosPorfolio.editarExperiencia('http://localhost:8080/editar/experiencia/'+id, {
       "id":this.inputId,
        "position":this.formLogin.value.position,
        "company":this.formLogin.value.company,
        "personaId":1,
        "img":"url",
        "start":this.formLogin.value.start ,
        "end": this.formLogin.value.end ,
        "city":this.formLogin.value.city ,
        "tipoEmpleo": this.formLogin.value.tipoEmpleo,
        "tipoJornada":this.formLogin.value.tipoJornada ,
          
       
     })
    .subscribe(respuesta =>{
      console.log("Experiencia editada!");
      
    });
    
    window.location.reload();
      }

   borrarExp(id: any){
    this.datosPorfolio.borrarExperiencia('http://localhost:8080/borrar_exp/'+id, {
      
     })
    .subscribe(respuesta =>{
      console.log("Experinecia borrada!")
    });

   }

   ponerid(id: any){
    this.inputId=id;
    console.log(this.inputId);
    this.formLogin.get("id").setValue(this.inputId);
    this.inputId2=id;
    return this.inputId; 
   }
   
   formLogin=this.fb.group({
    id: this.inputId,
    company:['',[Validators.required]],
    position:['',[Validators.required]],
    personaId:[1,[Validators.required]],
    start:['',[Validators.required]],
    end:['',[Validators.required]],
    img:['',[Validators.required]],
    city:['',[Validators.required]],
    tipoEmpleo:['',[Validators.required]],
    tipoJornada:['',[Validators.required]]

  });
  
   
}
