import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CarBoxComponent } from './components/car-box/car-box.component';
import { AdminComponent } from './components/admin/admin.component';
import { CarTableComponent } from './components/admin/car-table/car-table.component';


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
    CarTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
