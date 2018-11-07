import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnemonicComponent } from './containers/mnemonic/mnemonic.component';
import { VerificationComponent } from './containers/verification/verification.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [MnemonicComponent, VerificationComponent],
  imports: [
    CommonModule,
    UiModule,
  ],
  exports: [
    MnemonicComponent,
    UiModule,
  ]
})
export class WalletModule { }
