package com.edu.co;

import com.edu.co.usuario.Usuario;
import com.edu.co.usuario.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class LoadDataBase {

    @Bean
    CommandLineRunner initDatabase(UsuarioRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        return args -> {
            Usuario findByUser = userRepository.findByUser("admin");
            if (findByUser == null) {
               Usuario admin = new Usuario();
            admin.setUser("admin");
            admin.setPassword(bCryptPasswordEncoder.encode("admin"));
            admin.setRol("ADMIN");
            userRepository.save(admin); 
            }
            
        };
    }
}
