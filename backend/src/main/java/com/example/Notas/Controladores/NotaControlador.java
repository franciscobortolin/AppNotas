package com.example.Notas.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Notas.Modelos.Nota;
import com.example.Notas.Servicios.NotaServicio;

@RestController
@RequestMapping("/notas")
//@CrossOrigin(origins = "http://localhost:4200")
public class NotaControlador {
    @Autowired
    private NotaServicio servicio;

    @GetMapping
    public Iterable<Nota> listarTodos(){
        return servicio.listarTodos();
    }

    @GetMapping("/activos")
    public Iterable<Nota> listarActivos(){
        return servicio.listarActivos();
    }
    @GetMapping("/archivados")
    public Iterable<Nota> listarArchivados(){
        return servicio.listarArchivados();
    }
    
    //Guardar una nueva nota
    @PostMapping
    public Nota guardar(@RequestBody Nota n){
        return servicio.guardar(n);
    }

    //Actualizar
    @PutMapping("/{id}")
    public Nota actualizar(@PathVariable Long id, @RequestBody Nota n){
        if(n.getIdNota() != id){
            throw new RuntimeException("El ID no coincide");
        }
        return servicio.actualizar(n);
    }

    //Eliminar una nota
    @DeleteMapping("/{id}")
    public Nota eliminar(@PathVariable Long id){
        return servicio.eliminar(id);
    }
}
