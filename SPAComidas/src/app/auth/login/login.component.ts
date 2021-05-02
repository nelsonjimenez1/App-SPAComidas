import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  doLogin() {
    console.log(this.user + ' - ' + this.password);
    this.auth.login(this.user, this.password).subscribe(
      result => {
        console.log(result);
        this.auth.obtenerUserByNombre(this.user).subscribe(
          result2 => {
            console.log(result2);
            var rol = result2.rol;
            if (rol == 'CLIENTE') {
              localStorage.setItem('rol', 'CLIENTE');
              localStorage.setItem('user', this.user);
              this.router.navigate(['/cliente']);

            } else if (rol == 'ADMIN'){
              localStorage.setItem('rol', 'ADMIN');
              localStorage.setItem('user', this.user);
              this.router.navigate(['/admin']);

            }
            else {
              alert('Error al iniciar sesion');
            }
          },
          error2 => console.error(error2)
        );
      },
      error => console.error(error)
    );
  }
}
