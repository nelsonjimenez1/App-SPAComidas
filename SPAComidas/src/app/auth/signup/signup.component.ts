import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../servicios/auth.service';

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
    this.auth.signUp(this.user, this.password, 'CLIENTE').subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/login']);

      },
      error => console.error(error)
    );
  }
}
