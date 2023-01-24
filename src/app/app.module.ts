import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnsweredComponent } from './all-questions/answered/answered.component';
import { UnansweredComponent } from './all-questions/unanswered/unanswered.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
