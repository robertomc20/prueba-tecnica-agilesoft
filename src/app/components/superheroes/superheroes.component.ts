import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Superheroe } from '../../models/superheroe';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css'],
  providers: [PeticionesService]
})
export class SuperheroesComponent implements OnInit {
  public heroes: Superheroe[];

  public id: any;
	public nombre: string;
	public puedeVolar: string;
	public nombreReal: string;
  public avatarURL: string;
  
  constructor(
    private _peticionesService: PeticionesService
  ){ 
    this.id = 1;
  }

  ngOnInit(): void {
    this.getHeroes();
    this.getHeroe();
  }

  getHeroes(){
  	this._peticionesService.getHeroes().subscribe(
  		result => {
  			if(result.data){
          this.heroes =  (result.data);
        }
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

  getHeroe(){
  	this._peticionesService.getHeroe(this.id).subscribe(
  		result => {
  			this.nombre = (result.data);
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }


}
