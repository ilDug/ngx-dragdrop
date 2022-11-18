import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDragdropModule } from 'projects/ngx-dragdrop/src/public-api';

import { AppComponent } from './app.component';

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
