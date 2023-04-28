import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  miPorfolio:any="";
  formEncabezado=this.fbE.group({
    id: ['',[Validators.required]],
    name:['',[Validators.required]],
    position:['',[Validators.required]],
    ubication:['',[Validators.required]],
    about:['',[Validators.required]],
    logo:['',[Validators.required]],
    tel:['',[Validators.required]],
    mail:['',[Validators.required]],
    image:['',[Validators.required]],
    backimage:['',[Validators.required]],
    contrasena:['',[Validators.required]]

  });


  constructor(private datosPorfolio:PortfolioService, private fbE: FormBuilder, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
   this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.miPorfolio=data[0];
    console.log(data);
   });
  
  
  }

  editarEncabezado(id: any){
    this.datosPorfolio.editarEncabezado('http://localhost:8080/editar/persona/'+id, {
       
    "id": this.miPorfolio.id,
    "name":this.formEncabezado.value.name,
    "position":this.formEncabezado.value.position,
    "ubication":this.formEncabezado.value.ubication,
    "about":this.miPorfolio.about,
    "logo":this.miPorfolio.logo,
    "tel":this.formEncabezado.value.tel,
    "mail":this.formEncabezado.value.mail,
    "image":this.miPorfolio.image,
    "backimage":this.miPorfolio.backimage,
    "contrasena":this.miPorfolio.contrasena
    
     })
    .subscribe(respuesta =>{
     
      console.log("Encabezado editado!");
    });
    alert("Encabezado editado!");
    window.location.reload();
      }


}
