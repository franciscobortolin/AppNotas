package com.example.Notas.Modelos;
import java.util.Date;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Nota {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long idNota;
    private String titulo;
    private String contenido;
    private Date ultimaFechaActualizacion;
    private Boolean archivado;
}
