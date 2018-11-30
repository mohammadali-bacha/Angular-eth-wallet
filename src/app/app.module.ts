import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../../src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { WalletModule } from './wallet/wallet.module';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SelectErrorStateMatcherExample} from './wallet/containers/mnemonic/mnemonic.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    WalletModule,
  ],
  entryComponents: [SelectErrorStateMatcherExample],
  // declarations: [SelectErrorStateMatcherExample],
  bootstrap: [AppComponent, SelectErrorStateMatcherExample],
  providers: []
  // bootstrap: [AppComponent]
})
export class AppModule { }

