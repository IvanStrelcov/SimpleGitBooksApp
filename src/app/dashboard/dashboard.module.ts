import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { RouterModule }       from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent }   from '../sidebar';
import { HeaderComponent }    from '../header';
import { BooksService }       from '../services';
import { BooksModule }        from '../+books';
import { BookDetailModule }   from '../book-detail';
import { DashboardRouting }   from './dashboard.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BooksModule,
    BookDetailModule,
    DashboardRouting
  ],
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent
  ],
  exports: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent
  ],
  providers: [
    BooksService
  ]
})
export class DashboardModule {}
