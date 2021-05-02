/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.edu.co.controllers;

import com.edu.co.entities.Venta;
import com.edu.co.services.VentaService;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nelso
 */
@RestController
public class VentaController {
    @Autowired
    private VentaService ventaService;
    
    @GetMapping("/venta")
    ArrayList<Venta> getAllComidas() {
        return ventaService.getAllVentas();
    }
}
