import { Component, OnInit } from '@angular/core';
import { WalletService, WalletQuery } from '../../+state';
import { Observable } from 'rxjs';
import { ethers } from 'ethers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-mnemonic',
  templateUrl: './mnemonic.component.html',
  styleUrls: ['./mnemonic.component.css']
})
export class MnemonicComponent implements OnInit {
  isLinear = false;
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;

 public mnemonic$: Observable<string[]>;

  constructor(
    private service: WalletService,
    private query: WalletQuery,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
this.mnemonic$ = this.query.mnemonic$;
this.firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required]
});
this.secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});

  }
  public update() {
    this.service.setMnemonic(this.generateRandomMnemonic());
  }
  public generateRandomMnemonic() {
    return this.service.genereateRandomMnemonic();
  }

}

