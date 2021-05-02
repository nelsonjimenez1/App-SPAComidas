import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SPAComidas';
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('user')){
      if(localStorage.getItem('rol') == 'ADMIN') {
        this.router.navigate(["/admin/"]);
      }
      else {
        this.router.navigate(["/cliente/"]);
      }
    }
    else
    {
      this.router.navigate(["/login/"]);
    }
  }

}
