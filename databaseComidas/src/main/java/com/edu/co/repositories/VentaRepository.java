/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.edu.co.repositories;

import com.edu.co.entities.Usuario;
import com.edu.co.entities.Venta;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author nelso
 */
@Repository
public interface VentaRepository extends CrudRepository<Venta, Long>{
    
}
