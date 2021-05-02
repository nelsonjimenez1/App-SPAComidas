/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.edu.co.services;

import com.edu.co.entities.Venta;
import com.edu.co.repositories.VentaRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author nelso
 */
@Service
public class VentaService {
    @Autowired
    private VentaRepository ventaRepository;
    
    public ArrayList<Venta> getAllVentas() {
        return (ArrayList<Venta>) ventaRepository.findAll();
    }
}
