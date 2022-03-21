import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
  CommonModule,
  HomeRoutingModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule
  ]
})
export class HomeModule { }
