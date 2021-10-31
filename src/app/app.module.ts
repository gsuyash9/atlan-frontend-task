import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'
import { DataTableComponent } from './data-table/data-table.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
