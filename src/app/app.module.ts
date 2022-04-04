import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from "./cursos/CursosComponent";
import { AppComponent } from './app.component';
import { PrimeiroComponentComponent } from './primeiro-component/primeiro-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    CursosComponent,
    PrimeiroComponentComponent,
    DataBindingComponent
  ],
  bootstrap:[AppComponent]
})

export class AppModule { }
