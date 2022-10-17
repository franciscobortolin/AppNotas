import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuNotasComponent } from './menu-notas/menu-notas.component';

const routes: Routes = [
  {path: '',  component: MenuNotasComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
