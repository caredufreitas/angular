import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-melhorado',
  templateUrl: './ng-if-melhorado.component.html',
  styleUrls: ['./ng-if-melhorado.component.css']
})
export class NgIfMelhoradoComponent implements OnInit {

  // ngIf
  mostrarCursos: boolean = false;
  // ngFor
  cursosObservable;
  listaCursos: string[];

  constructor() { }

  ngOnInit(): void {
    // ngFor


  }

  onMostrarCursos() {
    // ngIf
    this.mostrarCursos = !this.mostrarCursos;
  }

  }
