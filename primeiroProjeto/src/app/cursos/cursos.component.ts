import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

// atributo para esta classe
  nomePortal: string | undefined;
  cursos: string[] | undefined;

  constructor(private cursoService: CursosService //injecao de dependecia, recebendo uma instancia de uma classe.
    ) {
    this.cursos = cursoService.getCursos(); //recebendo metodo do servico.
  }

  ngOnInit(): void {
    this.nomePortal = 'http://loiane.training'; //iniciando o atributo
  }

}
