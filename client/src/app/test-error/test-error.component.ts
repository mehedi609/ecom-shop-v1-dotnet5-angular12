import { Component, OnInit } from '@angular/core';
import { TestErrorService } from './test-error.service';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss'],
})
export class TestErrorComponent implements OnInit {
  validationErrors: string[];

  constructor(private testErrorService: TestErrorService) {}

  ngOnInit(): void {}

  get404Error() {
    this.testErrorService.get404Error().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get500Error() {
    this.testErrorService.get500Error().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get400Error() {
    this.testErrorService.get400Error().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get404ValidationError() {
    this.testErrorService.get400ValidationError().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
        this.validationErrors = error;
      }
    );
  }
}
