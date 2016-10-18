import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { BooksComponent }       from '../+books';
import { BookDetailComponent }  from '../book-detail';

const DashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'books', pathMatch: 'full'},
    { path: 'books', component: BooksComponent },
    { path: 'books/:book', component: BookDetailComponent }
  ] }
];
export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(DashboardRoutes);
