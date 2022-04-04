import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  styles: [
    `
      .highlight {
          background-color: yellow;
          font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {
  url: any = 'https://loiane.training/continuar-curso/angular';
  urlImagem: string = "http://lorempixel.com.br/500/400/?1";
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;
  getValor() {
    return 1;
  }
  botaoClicado() {
    alert("BOTÃO FUI CLICADO !!!!");
  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor: any) {
    this.valorSalvo = valor;

  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento:any){
    console.log(evento.novoValor);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
