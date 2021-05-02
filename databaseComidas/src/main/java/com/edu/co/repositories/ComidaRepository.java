/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.edu.co.repositories;

import com.edu.co.entities.Comida;
import com.edu.co.entities.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author nelso
 */
@Repository
public interface ComidaRepository extends CrudRepository<Comida, Long>{
    
}
