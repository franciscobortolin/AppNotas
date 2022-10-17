import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class NotasService {

	URL = 'http://localhost:8080/';


	constructor(private http: HttpClient) { }
    
    pedirNotasActivas() {
		return this.http.get(this.URL + 'notas/activos');
	}
    guardarNuevaNota(nota:any){
        return this.http.post(this.URL + 'notas', nota);
    }
    eliminarNota(idNota:any){
        return this.http.delete(this.URL + 'notas/'+idNota);
    }
    archivarNota(idNota:any,nota:any){
        return this.http.put(this.URL + 'notas/'+idNota+'/archivar',nota);
    }
    
}