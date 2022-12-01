import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  lstPersona: any = new Array()
  personas: any
  constructor(private router: Router, private personaservice: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersonas()
  }
  cargarPersonas(){
    this.personas = this.personaservice.getPersonas();
    console.log(this.lstPersona)
  }

}
