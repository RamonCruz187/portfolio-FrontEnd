import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
}) 
export class EducacionComponent implements OnInit {
  educacionList:any;
  public inputId: any="";
  public inputId2: any="";

  formEducacion=this.fb.group({
    id: ['',[Validators.required]],
    school: ['',[Validators.required]],
    title:['',[Validators.required]],
    carrer:['',[Validators.required]],
    personaId:[1,[Validators.required]],
    start:['',[Validators.required]],
    end:['',[Validators.required]],
    img:['',[Validators.required]],
    estadoEducacion:['',[Validators.required]],
  });

  constructor(private datosPorfolio:PortfolioService, private fb: FormBuilder, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.educacionList = data[0].educacion;
      console.log(this.educacionList);
    })
  }

  enviarEdu(){
    this.datosPorfolio.nuevaEducacion('http://localhost:8080/new/educacion', {
      "id":this.formEducacion.value.id,
      "school":this.formEducacion.value.school,
      "title":this.formEducacion.value.title,
      "personaId":1,
      "img":"url",
      "start":this.formEducacion.value.start ,
      "end": this.formEducacion.value.end ,
      "carrer":this.formEducacion.value.carrer ,
      "estadoEducacion": this.formEducacion.value.estadoEducacion,
      
     })
    .subscribe(respuesta =>{
      console.log("Educacion enviada!")
    });
    if(true){
      alert("Experiencia enviada!");
      window.location.reload()
    };
   }

   editarEdu(id: any){
    this.datosPorfolio.editarEducacion('http://localhost:8080/editar/educacion/'+id, {
     
    "id":this.inputId,
      "school":this.formEducacion.value.school,
      "title":this.formEducacion.value.title,
      "personaId":1,
      "img":"url",
      "start":this.formEducacion.value.start ,
      "end": this.formEducacion.value.end ,
      "carrer":this.formEducacion.value.carrer ,
      "estadoEducacion": this.formEducacion.value.estadoEducacion,
        
     })
    .subscribe(respuesta =>{
      console.log("Educacion editada!");
    });
    alert("Educacion cargada!");
    window.location.reload();
      }


      borrarEdu(id: any){
        this.datosPorfolio.borrarEducacion('http://localhost:8080/borrar_edu/'+id, {})
        .subscribe(respuesta =>{
          console.log("Educacion borrada!")
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
