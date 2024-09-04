import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import {TodosComponent} from './pages/todos/todos.component';
import { permissionsGuard } from './guards/permissions.guard';

import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    
    { path: 'products/:id', component: ProductDetailComponent },
    {path: 'login', component:LoginComponent},
    { path: 'contact', component: ContactComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
    {path: 'todos', component: TodosComponent, canActivate: [permissionsGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', component:Error404Component}
];
