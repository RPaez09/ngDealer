import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CarBoxComponent } from './components/car-box/car-box.component';
import { CarTableComponent } from './components/admin/car-table/car-table.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailCarComponent } from './components/detail/detail-car/detail-car.component';
import { EditCarFormComponent } from './components/admin/edit-car-form/edit-car-form.component';
import { HomeComponent } from './components/home/home.component';
import { NewCarFormComponent } from './components/admin/new-car-form/new-car-form.component';

import { reducers } from './reducers';

const routes: Routes = [  { path: '', redirectTo: 'home', pathMatch: 'full' },
                          { path: 'about', component: AboutComponent },
                          { path: 'admin', component: AdminComponent,
                              children: [
                                { path: 'edit', component: EditCarFormComponent }
                              ] 
                            },
                          { path: 'car', redirectTo: 'home' },
                          { path: 'car/:id', component: DetailComponent },
                          { path: 'home', component: HomeComponent } 
                      ];

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    AboutComponent,
    CarBoxComponent,
    AdminComponent,
    CarTableComponent,
    NewCarFormComponent,
    DetailComponent,
    DetailCarComponent,
    EditCarFormComponent
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
