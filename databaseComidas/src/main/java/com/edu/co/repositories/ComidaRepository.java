/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.edu.co.repositories;

import com.edu.co.entities.Comida;
import java.util.ArrayList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author nelso
 */
@Repository
public interface ComidaRepository extends JpaRepository<Comida, Long>{
    @Query("SELECT c from Comida c WHERE c.existe = true")
    ArrayList<Comida> getAllComidas();
}
