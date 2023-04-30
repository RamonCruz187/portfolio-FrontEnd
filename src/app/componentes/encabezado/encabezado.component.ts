import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  isLogged = false;
  isLogginFail= false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[]=[];
  errMsj: string;


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


  constructor(private datosPorfolio:PortfolioService, private fbE: FormBuilder, private activatedRoute: ActivatedRoute, private tokenService: TokenService, private authService: AuthService, private router: Router){}

  ngOnInit(): void{
   this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.miPorfolio=data[0];
    console.log(data);
    console.log("esta logeado en OnInit: " + this.isLogged);
   });

   if(this.tokenService.getToken()){
    this.isLogged = true;
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
    console.log("esta logeado: " + this.isLogged);
   }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAythotities(data.authorities);
      this.roles = data.authorities;
      /* this.router.navigate(['/portfolio']); */
      window.location.reload();
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
  }

  onLogout() {
    this.tokenService.logOut();
    window.location.reload();
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
