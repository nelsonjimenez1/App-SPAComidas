/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.edu.co.entities;

import com.edu.co.usuario.Usuario;
import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

/**
 *
 * @author nelso
 */
@Entity
public class Venta {
    @Id
    @GeneratedValue
    private Long id;
    @OneToOne
    @JoinColumn(name = "comida_id", updatable = false, nullable = false)
    private Comida comida;
    private Date fecha;
    private int cantidad_productos;
    private double precio_total;
    @OneToOne
    @JoinColumn(name = "usuario_id", updatable = false, nullable = false)
    private Usuario usuario;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Comida getComida() {
        return comida;
    }

    public void setComida(Comida comida) {
        this.comida = comida;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public int getCantidad_productos() {
        return cantidad_productos;
    }

    public void setCantidad_productos(int cantidad_productos) {
        this.cantidad_productos = cantidad_productos;
    }

    public double getPrecio_total() {
        return precio_total;
    }

    public void setPrecio_total(double precio_total) {
        this.precio_total = precio_total;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
