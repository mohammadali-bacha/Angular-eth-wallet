import { Component, OnInit } from '@angular/core';
import { WalletService, WalletQuery } from '../../+state';
import { Observable } from 'rxjs';
import { ethers } from 'ethers';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-mnemonic',
  templateUrl: './mnemonic.component.html',
  styleUrls: ['./mnemonic.component.css']
})
export class SelectErrorStateMatcherExample {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
}
export class MnemonicComponent implements OnInit {

  public update() {
    this.service.setMnemonic(this.generateRandomMnemonic());
  }
  public generateRandomMnemonic() {
    return this.service.genereateRandomMnemonic();
  }

  isLinear = false;
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
   thirdFormGroup: FormGroup;
   fourthFormGroup: FormGroup;

   myControl = new FormControl();
   options: string[] = ['One', 'Two', 'Three'];
   filteredOptions: Observable<string[]>;

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
this.thirdFormGroup = this._formBuilder.group({
  thirdCtrl: ['', Validators.required]
});
this.fourthFormGroup = this._formBuilder.group({
  thirdCtrl: ['', Validators.required]
});
this.filteredOptions = this.myControl.valueChanges
.pipe(
  startWith(''),
  map(value => this._filter(value))
);
}

private _filter(value: string): string[] {
const filterValue = value.toLowerCase();

return this.options.filter(option => option.toLowerCase().includes(filterValue));
}

  }



