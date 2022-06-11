import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Parent4Component } from './parent4/parent4.component';

const routes: Routes = [
  {path:'temp-ref-var',component:TemplateRefVarComponent},
  {path:'pipes',component:PipesComponent},
  {path:'view-child',component:ViewChildComponent},
  {path:'@input',component:Parent1Component},
  {path:'@output',component:Parent2Component},
  {path:'gettersetter',component:Parent3Component},
  {path:'service',component:Parent4Component}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
