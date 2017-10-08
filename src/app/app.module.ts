import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdDialogModule} from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';

import { AppComponent, AddMessageComponent } from './app.component';
import { ModelsService } from './models.service';

@NgModule({
  declarations: [
    AppComponent,
    AddMessageComponent
  ],
  entryComponents: [
    AppComponent,
    AddMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdIconModule,
    MdGridListModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdInputModule,
    MdMenuModule
  ],
  providers: [ModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
