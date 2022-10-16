package com.example.Notas.Servicios;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Notas.Modelos.Nota;
import com.example.Notas.Repositorios.NotaRepositorio;

@Service
public class NotaServicio {
    @Autowired
    private NotaRepositorio repositorio;

    public Iterable<Nota> listarTodos(){
        return repositorio.findAll();
    }

    public Iterable<Nota> listarActivos(){
        return repositorio.findByArchivado(false);
    }
    public Iterable<Nota> listarArchivados(){
        return repositorio.findByArchivado(true);
    }

    public Nota guardar(Nota n){
        //Cuando se crea una nota nueva se le asigna la fecha actual.
        n.setUltimaFechaActualizacion(java.sql.Date.valueOf(java.time.LocalDate.now()));
        //Cuando se crea una nota nueva se le asigna el estado activo.
        n.setArchivado(false);
        return repositorio.save(n);
    }

    public Nota actualizar(Nota n){
        Optional<Nota> instanciaBD=repositorio.findById(n.getIdNota());
        if(!instanciaBD.isPresent()){
            throw new RuntimeException("El id no existe");
        }
        n.setUltimaFechaActualizacion(java.sql.Date.valueOf(java.time.LocalDate.now()));
        return repositorio.save(n);
    }
    public Nota eliminar(Long id){
        Optional<Nota> instanciaBD=repositorio.findById(id);
        if(!instanciaBD.isPresent()){
            throw new RuntimeException("El id no existe");
        }
        repositorio.deleteById(id);
        return instanciaBD.get();
    }
}
