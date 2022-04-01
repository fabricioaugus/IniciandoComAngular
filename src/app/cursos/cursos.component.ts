import { Component } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomeDoPortal: string;
  cursos: string[] = ["Angular", "C#/.NET", "java"];
  constructor() {
    this.nomeDoPortal = "https://loiane.training/continuar-curso/angular";


    this.cursos.forEach(curso => {
      curso;
    });
  }
}