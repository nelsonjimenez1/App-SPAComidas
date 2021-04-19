import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

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
    var rol = this.auth.login(this.user, this.password);
    if (rol == 'Cliente') {
      localStorage.setItem('rol', 'Cliente');
      localStorage.setItem('user', this.user);
      this.router.navigate(['/cliente']);

    } else if (rol == 'Admin'){
      localStorage.setItem('rol', 'Admin');
      localStorage.setItem('user', this.user);
      this.router.navigate(['/admin']);

    }
    else {
      alert('Error al iniciar sesion');
    }
  }
}
