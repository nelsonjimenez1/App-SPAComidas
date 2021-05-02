/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.edu.co.repositories;

import com.edu.co.entities.Venta;
import java.util.ArrayList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author nelso
 */
@Repository
public interface VentaRepository extends JpaRepository<Venta, Long>{
    @Query("SELECT v from Venta v WHERE v.usuario.user = :user")
    ArrayList<Venta> findVentasByUser(@Param("user") String user);
}
