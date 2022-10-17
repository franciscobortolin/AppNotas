import { Component, OnInit } from '@angular/core';
import { NotasService } from '../servicios/nota.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NuevaNotaComponent } from '../nueva-nota/nueva-nota.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-menu-notas',
  templateUrl: './menu-notas.component.html',
  styleUrls: ['./menu-notas.component.css']
})
export class MenuNotasComponent implements OnInit {

  constructor(private servicioNotas: NotasService,
    private matDialog: MatDialog,
    ) 
  {}

  notasActivas:any={};
  notasArchivadas:any={};

  modoActivas:boolean=true;

  ngOnInit(): void {
    this.cargarNotasActivas()
  }
  
  
  cargarNotasActivas() {
    this.servicioNotas.pedirNotasActivas().subscribe((rta) => {
			this.notasActivas = rta;
      console.log(this.notasActivas)
			
			
		});
  }
  
  crearNuevaNota(){
    var matAbierto:any;
    matAbierto = this.matDialog.open(NuevaNotaComponent,{
    "width": '5000px',
    "maxHeight": '1000px',
    "data": "",
    "autoFocus": false}).afterClosed().subscribe((res) => {
      this.refrescarNotas();
    });

  }
  refrescarNotas(){
    this.cargarNotasActivas();
  }
  borrarNota(idNota:any){
    if(confirm("Are you sure you want to delete this note")) {
      this.servicioNotas.eliminarNota(idNota).subscribe((rta) => {
        console.log(rta);
        this.refrescarNotas();
      });
    }
    
  }
  archivarNota(idNota:any,nota:any){
    if(confirm("Are you sure you want to archive this note")) {
      this.servicioNotas.archivarNota(idNota,nota).subscribe((rta) => {
        console.log(rta);
        this.refrescarNotas();
      });
    }
    
  }

}
