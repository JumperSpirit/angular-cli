import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RefuploadComponent } from './refupload/refupload.component';
import { ReflistComponent } from './reflist/reflist.component';
import { DeviceviewComponent } from './deviceview/deviceview.component';
import { DeviceEditorComponent } from './device-editor/device-editor.component';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RefuploadComponent,
    ReflistComponent,
    DeviceviewComponent,
    DeviceEditorComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
