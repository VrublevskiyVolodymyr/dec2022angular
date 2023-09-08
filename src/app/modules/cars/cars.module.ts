import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import {CarsPageComponent} from "./pages/cars-page/cars-page.component";
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CarsPageComponent,
    CarFormComponent,
    CarComponent,
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
