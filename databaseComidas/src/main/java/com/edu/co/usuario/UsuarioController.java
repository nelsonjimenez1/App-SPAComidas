package com.edu.co.usuario;

import java.util.List;
import java.util.Optional;
import org.springframework.security.access.annotation.Secured;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuarioController {

    private UsuarioRepository usuarioRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UsuarioController(UsuarioRepository usuarioRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping("/users")
    public Usuario saveUsuario(@RequestBody Usuario user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return usuarioRepository.save(user);
    }

    @GetMapping("/users/{user}")
    public Usuario getUsuario(@PathVariable String user) {
        return usuarioRepository.findByUser(user);
    }

    @Secured("ROL_Admin")
    @GetMapping("/users")
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
}
