import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { WalletStore } from './wallet.store';
import { HttpClient } from '@angular/common/http';
import { ethers } from 'ethers';

@Injectable({ providedIn: 'root' })
export class WalletService {

  constructor(private store: WalletStore) {
  }
  setMnemonic(mnemonic: string) {
    this.store.update({mnemonic});
  }
    genereateRandomMnemonic() {
      return ethers.Wallet.createRandom().mnemonic;
 }

}



