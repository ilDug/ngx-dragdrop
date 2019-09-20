import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDragdropModule } from '../../projects/ngx-dragdrop/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDragdropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
