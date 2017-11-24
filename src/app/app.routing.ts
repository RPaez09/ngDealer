import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CarTableComponent } from './components/admin/car-table/car-table.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditCarFormComponent } from './components/admin/edit-car-form/edit-car-form.component';
import { HomeComponent } from './components/home/home.component';
import { NewCarFormComponent } from './components/admin/new-car-form/new-car-form.component';
import { PageNotFoundComponent } from './components/404/404.component';

const routes: Routes = 
[  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent,
      children: [
        { path: '', component: CarTableComponent },
        { path: 'edit', redirectTo: 'home' },
        { path: 'edit/:id', component: EditCarFormComponent },
        { path: 'new', component: NewCarFormComponent }
      ] 
    },
  { path: 'car', redirectTo: 'home' },
  { path: 'car/:id', component: DetailComponent },
  { path: 'home', component: HomeComponent },
  { path: '404', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = 
[
    AboutComponent,
    AdminComponent,
    CarTableComponent,
    DetailComponent,
    EditCarFormComponent,
    HomeComponent,
    NewCarFormComponent,
    PageNotFoundComponent
];