import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom1/custom-pipe';
import { PersonPipePipe } from './pipes/custom2/person-pipe.pipe';
import { ViewChildComponent } from './view-child/view-child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { GetterSetterComponent } from './getter-setter/getter-setter.component';
import { Parent3Component } from './parent3/parent3.component';
import { GreetComponent } from './greet/greet.component';
import { Parent4Component } from './parent4/parent4.component';




@NgModule({
  declarations: [
    AppComponent,
    
    InputComponent,
    OutputComponent,
    TemplateRefVarComponent,
    PipesComponent,
    CustomPipe,
    PersonPipePipe,
    ViewChildComponent,
    
    Parent2Component,
    Parent1Component,
    GetterSetterComponent,
    Parent3Component,
    GreetComponent,
    Parent4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
