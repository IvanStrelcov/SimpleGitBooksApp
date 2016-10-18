import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { NoContentComponent }     from './no-content';
import { DashboardComponent }     from './dashboard';
import { BooksComponent }         from './+books';

const Routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**',    component: NoContentComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(Routes, {useHash: true});
