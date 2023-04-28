import { Component, OnInit,} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  public inputId: any="";
  public inputId2: any="";

  formLogin=this.fb.group({
    id: ['',[Validators.required]],
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

  

  constructor(private datosPorfolio:PortfolioService, private fb: FormBuilder, private activatedRoute: ActivatedRoute){
  }
  
  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.experienciaList = data[0].experiencias;
      console.log(this.experienciaList);
      
    });
  }

  enviarExp(){
    this.datosPorfolio.nuevaExperiencia('http://localhost:8080/new/experiencia', {
      "id":this.formLogin.value.id,
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
      console.log("Experinecia enviada!")
    });
    if(true){
      alert("Experiencia cargada!");
      window.location.reload()
    };
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
    alert("Experiencia cargada!");
    window.location.reload();
      }

   borrarExp(id: any){
    this.datosPorfolio.borrarExperiencia('http://localhost:8080/borrar_exp/'+id, {})
    .subscribe(respuesta =>{
      console.log("Experinecia borrada!")
    });

   }

   ponerid(id: any){
    this.inputId=id;
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
