import { Component, OnInit } from '@angular/core';
import { WalletService, WalletQuery } from '../../+state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mnemonic',
  templateUrl: './mnemonic.component.html',
  styleUrls: ['./mnemonic.component.css']
})
export class MnemonicComponent implements OnInit {

 public mnemonic$: Observable<string[]>;

  constructor(
    private service: WalletService,
    private query: WalletQuery,
  ) { }

  ngOnInit() {
this.mnemonic$ = this.query.mnemonic$;
  }
  public update() {
    this.service.setMnemonic('salut les amis');
  }
}
