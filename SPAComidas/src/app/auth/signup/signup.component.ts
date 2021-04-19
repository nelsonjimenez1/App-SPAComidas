import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = '';
  password = '';
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  signUp() {
    console.log(this.user + ' - ' + this.password);
    var rol = this.auth.signUp(this.user, this.password, 'Cliente');
    localStorage.setItem('rol', 'Cliente');
    localStorage.setItem('user', this.user);
    this.router.navigate(['/cliente']);
  }
}
