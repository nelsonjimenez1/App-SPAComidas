/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.edu.co.controllers;

import com.edu.co.entities.Venta;
import com.edu.co.services.VentaService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nelso
 */
@RestController
public class VentaController {
    @Autowired
    private VentaService ventaService;
    
    @Secured("ROL_Admin")
    @GetMapping("/venta")
    ArrayList<Venta> getAllVentas() {
        return ventaService.getAllVentas();
    }
    
    @Secured("ROL_Cliente")
    @PostMapping("/venta")
    Venta saveVenta(@RequestBody Venta venta) {
        return ventaService.saveVenta(venta);
    }
    
    @Secured("ROL_Cliente")
    @GetMapping("/venta/user/{user}")
    ArrayList<Venta> findVentasByUser(@PathVariable String user) {
        ArrayList<Venta> ventas = ventaService.findVentasByUser(user);
        if(ventas != null) {
            return ventas;
        }
        return null;
    }
    
    @Secured("ROL_Cliente")
    @GetMapping("/venta/{id}")
    Venta findVenta(@PathVariable Long id) {
        Venta venta = ventaService.findVenta(id);
        if(venta != null) {
            return venta;
        }
        return null;
    }
}
