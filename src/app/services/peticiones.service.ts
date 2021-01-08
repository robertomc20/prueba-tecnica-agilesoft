import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = "http://157.245.138.232:9091/";
    }

    getHeroes(): Observable<any>{
  
        return this._http.get(this.url+'api/v1/test/superheroes');
    }

    getHeroe(id): Observable<any>{	//este metodo devuelve un Observable de cualquier tipo
		return this._http.get(this.url+'api/v1/test/superheroes/'+id)	//peticion ajax por http
	}
}