import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router, private routing: AppRoutingModule) { }

  ngOnInit(): void {
  }

  redirect(path: any) {
    if(path == 'description') {
      this.router.navigate(['/description'])
    }
    else {
      this.router.navigate(['/lyrics'])
    }
  }
}
