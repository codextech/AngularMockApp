import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule  // because Side bar using routerLink Directives
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    CommonModule,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
],
})
export class UISharedModule { }
