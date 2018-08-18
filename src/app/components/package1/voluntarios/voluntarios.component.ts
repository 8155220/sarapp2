import { VoluntarioService } from './../../../services/voluntario.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.css']
})
export class VoluntariosComponent implements OnInit {

  constructor(private voluntarioService :VoluntarioService) { }

  ngOnInit() {
    this.voluntarioService.getVoluntarios().subscribe(voluntarios=>{
      console.log(voluntarios);
      
    })
      ;
  }

}
