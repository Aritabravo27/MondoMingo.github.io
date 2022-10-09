import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DescriptionComponent } from './description/description.component';
import { LyricsComponent } from './lyrics/lyrics.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DescriptionComponent,
    LyricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
