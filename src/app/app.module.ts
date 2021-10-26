import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MylowercasePipe } from './mylowercase.pipe';
import { XAmountOfCharactersPipe } from './x-amount-of-characters.pipe';
import {FormsModule} from "@angular/forms";
import { FilterPetsPipe } from './filter-pets.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MylowercasePipe,
    XAmountOfCharactersPipe,
    FilterPetsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
