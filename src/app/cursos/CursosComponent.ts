import { Component } from '@angular/core';
import {CursosServiceService} from "./cursos-service.service";
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomeDoPortal: string;
  cursos: string[];
  
  constructor(private cursosServiceService:CursosServiceService ) {
    this.nomeDoPortal = "https://github.com/fabricioaugus";
    var servico = new CursosServiceService();
    this.cursos = this.cursosServiceService.getCurso();

  }
}