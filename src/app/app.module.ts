import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
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
import { NewCarFormComponent } from './components/admin/new-car-form/new-car-form.component';

import { reducers } from './reducers';

//Material dependencies
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

const routes: Routes = 
[  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent,
      children: [
        { path: '', component: CarTableComponent },
        { path: 'edit', component: EditCarFormComponent },
        { path: 'new', component: NewCarFormComponent }
      ] 
    },
  { path: 'car', redirectTo: 'home' },
  { path: 'car/:id', component: DetailComponent },
  { path: 'home', component: HomeComponent } 
];

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
    NewCarFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
