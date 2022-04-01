import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosServiceService } from './cursos-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  exports: [
    CursosComponent
  ],
  providers: [ 
    CursosServiceService
   ]
})
export class CursosModule { }