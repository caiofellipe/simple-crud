import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { ClientModel } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss']
})
export class HomeDialogComponent implements OnInit {
  formRegisterClient!: FormGroup;
  checked: boolean = false;
  hiddenPeoplePf: boolean = true;
  hiddenPeoplePj: boolean = true;
  hiddenPhone: boolean = true;
  client!: ClientModel;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createFormRegisterClient();
  
    if(this.client == undefined){
      this.newPhone();
    }
  }

  createFormRegisterClient(){
    this.formRegisterClient = this.fb.group({
      name: [''],
      type: [''],
      cpf: [''],
      cnpj:[''],
      rg: [''],
      ie: [''],
      dateRegister: [''],
      active: [''],
      phones: this.fb.array([]),
    });


  }

  selectPeople(valueChange: MatRadioChange){
    if(valueChange.value == "pf"){
      this.hiddenPeoplePj = true;
      this.hiddenPeoplePf = false;
      this.hiddenPhone = false;
    }

    if(valueChange.value == "pj"){
      this.hiddenPeoplePf = true;
      this.hiddenPeoplePj = false;
      this.hiddenPhone = false;
    }
  }

  newPhone(){
    return this.phonesArray.push(
      this.fb.group({
        phone: [''],
      })
    );
  }

  get phonesArray(): FormArray{
    console.log("");
    return this.formRegisterClient.get('phones') as FormArray;
  }
  
}
