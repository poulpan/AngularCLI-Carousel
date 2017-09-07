import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarImageComponent } from './car-image/car-image.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarTableComponent } from './car-table/car-table.component';

@NgModule({
  declarations: [
    AppComponent, CarImageComponent, CarListComponent, 
    CarTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
