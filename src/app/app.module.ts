import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CarBoxComponent } from './components/car-box/car-box.component';
import { AdminComponent } from './components/admin/admin.component';
import { CarTableComponent } from './components/admin/car-table/car-table.component';
import { NewCarFormComponent } from './components/admin/new-car-form/new-car-form.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

const routes: Routes = [  { path: '', redirectTo: 'home', pathMatch: 'full' },
                          { path: 'home', component: HomeComponent },
                          { path: 'about', component: AboutComponent },
                          { path: 'admin', component: AdminComponent }];

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    AboutComponent,
    CarBoxComponent,
    AdminComponent,
    CarTableComponent,
    NewCarFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
