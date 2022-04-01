import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomeDoPortal: string;
  constructor() {
    this.nomeDoPortal = "https://github.com/fabricioaugus";
  }
}
