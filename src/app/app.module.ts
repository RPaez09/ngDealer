import { AppRoutingModule , RoutingComponents } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CarBoxComponent } from './components/home/car-box/car-box.component';
import { CarTableComponent } from './components/admin/car-table/car-table.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailCarComponent } from './components/detail/detail-car/detail-car.component';
import { EditCarFormComponent } from './components/admin/edit-car-form/edit-car-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewCarFormComponent } from './components/admin/new-car-form/new-car-form.component';
import { PageNotFoundComponent } from './components/404/404.component';

import { reducers } from './reducers';

//Material dependencies
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AboutComponent,
    AdminComponent,
    AppComponent, 
    CarBoxComponent,
    CarTableComponent,
    DetailCarComponent,
    DetailComponent,
    EditCarFormComponent,
    FooterComponent,
    HomeComponent,
    NewCarFormComponent,
    PageNotFoundComponent,
    RoutingComponents,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.provideStore(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
