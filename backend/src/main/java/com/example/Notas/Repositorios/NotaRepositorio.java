package com.example.Notas.Repositorios;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.Notas.Modelos.Nota;

@Repository
public interface NotaRepositorio extends PagingAndSortingRepository<Nota,Long>{
    
    @Query("")
    public Iterable<Nota> findByArchivado(Boolean archivado);
    
}
