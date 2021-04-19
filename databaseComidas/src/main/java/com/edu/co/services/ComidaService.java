/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.edu.co.services;

import com.edu.co.entities.Comida;
import com.edu.co.repositories.ComidaRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 *
 * @author nelso
 */
@Service
public class ComidaService {
    @Autowired
    private ComidaRepository comidaRepository;
    
    public ArrayList<Comida> getAllComidas() {
        return (ArrayList<Comida>) comidaRepository.findAll();
    }
    
    public Comida findComidaById(Long id) {
        Optional<Comida> comida = comidaRepository.findById(id);
        if (comida.isPresent()) {
            return comida.get();
        }
        
        return null;
    }
    
    public Comida editComida(Comida comida) {
        Optional<Comida> comidaOpt = comidaRepository.findById(comida.getId());
        if (comidaOpt.isPresent()) {
            return comidaRepository.save(comida);
        }
        
        return null;
    }
    
    public Comida saveComida(Comida comida) {
        return comidaRepository.save(comida);
    }
    
    public void deleteComidaById(Long id) {
        comidaRepository.deleteById(id);
    }
}
