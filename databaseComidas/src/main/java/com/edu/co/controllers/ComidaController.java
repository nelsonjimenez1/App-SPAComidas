/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.edu.co.controllers;

import com.edu.co.entities.Comida;
import com.edu.co.services.ComidaService;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nelso
 */
@RestController
public class ComidaController {

    @Autowired
    private ComidaService comidaService;

    @Secured({"ROL_Cliente", "ROL_Admin"})
    @GetMapping("/comida")
    ArrayList<Comida> getAllComidas() {
        return comidaService.getAllComidas();
    }

    @Secured({"ROL_Cliente", "ROL_Admin"})
    @GetMapping("/comida/{id}")
    Comida findComidaById(@PathVariable Long id) {
        Comida comida = comidaService.findComidaById(id);
        if (comida != null) {
            return comida;
        }
        return null;
    }

    @Secured("ROL_Admin")
    @PutMapping("/comida")
    Comida editComida(@RequestBody Comida comida) {
        Comida comidaAux = comidaService.editComida(comida);
        if (comidaAux != null) {
            return comidaAux;
        }
        return null;
    }

    @Secured("ROL_Admin")
    @PostMapping("/comida")
    Comida saveComida(@RequestBody Comida comida) {
        return comidaService.saveComida(comida);
    }
}
