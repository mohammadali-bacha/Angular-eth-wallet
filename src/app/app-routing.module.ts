import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MnemonicComponent } from './wallet/containers/mnemonic/mnemonic.component';

const routes: Routes =  [
  { path: '', component: MnemonicComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
