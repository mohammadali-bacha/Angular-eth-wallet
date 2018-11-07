import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface WalletState {
  mnemonic: string;
}

export function createInitialState(): WalletState {
  return {
    mnemonic: 'coucou'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wallet' })
export class WalletStore extends Store<WalletState> {

  constructor() {
    super(createInitialState());
  }

}

