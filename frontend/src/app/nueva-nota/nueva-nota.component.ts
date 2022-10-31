import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotasService } from '../servicios/nota.service';

@Component({
  selector: 'app-nueva-nota',
  templateUrl: './nueva-nota.component.html',
  styleUrls: ['./nueva-nota.component.css']
})
export class NuevaNotaComponent implements OnInit {

  nuevaNota: any={};
  modoCrear:boolean = true;
  titulo:any;
  contenido:any;
  constructor(private servicioNotas: NotasService,
    public dialogRef:MatDialogRef<NuevaNotaComponent>) { }

  ngOnInit(): void {
  }

  guardarNuevaNota(){
    this.nuevaNota.titulo = this.titulo;
    this.nuevaNota.contenido = this.contenido;
    //console.log("Titulo: " + this.nuevaNota.titulo + " Contenido: " + this.nuevaNota.contenido);
    this.servicioNotas.guardarNuevaNota(this.nuevaNota).subscribe((rta) => {
      console.log(rta)
      this.dialogRef.close();
		});
  }

}
