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

  notasActivas:any=[];
  notasArchivadas:any=[];

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
      this.refrescarNotasActivas();
    });

  }
  refrescarNotasActivas(){
    this.cargarNotasActivas();
  }
  borrarNota(idNota:any){
    if(confirm("Are you sure you want to delete this note")) {
      this.servicioNotas.eliminarNota(idNota).subscribe((rta) => {
        console.log(rta);
        this.refrescarNotasActivas();
      });
    }
    
  }
  archivarNota(idNota:any,nota:any){
    if(confirm("Are you sure you want to archive this note")) {
      this.servicioNotas.archivarNota(idNota,nota).subscribe((rta) => {
        console.log(rta);
        this.refrescarNotasActivas();
      });
    } 
  }
  activarNota(idNota:any,nota:any){
    if(confirm("Are you sure you want to activate this note")) {
      this.servicioNotas.activarNota(idNota,nota).subscribe((rta) => {
        console.log(rta);
        this.refrescarNotasArchivadas();
      });
    } 
  }

  cambiarModo(){
    this.modoActivas=!this.modoActivas;
    if(this.modoActivas==true){
      this.refrescarNotasActivas()
    }else{
      this.refrescarNotasArchivadas();
    }
  }

  refrescarNotasArchivadas(){
    this.servicioNotas.pedirNotasArchivadas().subscribe((rta) => {
			this.notasArchivadas = rta;
      console.log(this.notasArchivadas)
			
			
		});
  }
  abrirEditorNota(){
    console.log("Falta crear funcionalidad de editar");
  }
}
