import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestErrorComponent } from './test-error.component';
import { TestErrorRoutingModule } from './test-error-routing.module';

@NgModule({
  declarations: [TestErrorComponent],
  imports: [CommonModule, TestErrorRoutingModule],
})
export class TestErrorModule {}
