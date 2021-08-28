import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IError } from '../../shared/models/error';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
})
export class ServerErrorComponent implements OnInit {
  serverError: IError;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.serverError = navigation?.extras?.state?.error;
  }

  ngOnInit(): void {}
}
