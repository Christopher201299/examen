import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { GaleriaComponent } from './component/galeria/galeria.component';
const routes: Routes = [{path:'Inicio',component:InicioComponent},
{path:'Galeria',component:GaleriaComponent},{path:'**',component:InicioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
