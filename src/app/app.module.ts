import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ //sayfa modülü buraya
    AppComponent
  ],
  imports: [ //angular modülü buraya
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //çalışacak olan ilk modül
})
export class AppModule { //export ile dışarıya açtık ve main.ts de kullandık

} 
