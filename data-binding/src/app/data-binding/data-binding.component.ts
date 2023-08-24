import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loianae.com';
  cursoAngular: boolean = true;
  // urlImagem
  urlImagem: string = 'https://picsum.photos/id/237/200/300';
  // pegando o valor do evento e printando no template.
  valorAtual: string = '';
  // pegando valor por parametro
  valorSalvo: string;
  // mouseOver, inicializada com false porque o mouse nao vai estar em cima daquele determinado elemento
  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
  // botao
  botaoClicado() {
    alert('Botão clicado!');
  }
  // input escutando evento
  onKeyUp(evento: KeyboardEvent) {
    /*
    evento capturando o evento
    tipando a variavel para ter acesso ao intelicense, metodos do objeto KeyboardEvent,
    no próprio console log temos o tipo da variavel e isto é útil para agente.
    O objeto tem uma propriedade chamada target que e o proprio elemento HTML,
    e no final tem uma propriedade chamada value entre os (...) pontos.
    */
    // console.log((<HTMLInputElement>evento.target).value);
    /*O evento.target vai dar um erro de compilação pois o evento.target ele e do tipo
    <HTMLInputelemet> estas intergaces existem no typeScript para facilitar trabalhar
    com todos os objetos do javaScript.
    Agora no Browser podemos ter o console do que esta sendo digitado.
    */
    //  atribuindo a variavel o valor do evento
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  // salvarValor passando por paramentro
  salvarValor(valor) {
    this.valorSalvo = valor;
  }
  // mouseOver, mouseOut
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
    // negando o valor, quando poe o mouse o valor se torna true tira torna-se false
  }
}
