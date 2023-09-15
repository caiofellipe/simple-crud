import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs';
import { ClientService } from 'src/app/core/services/client.service';
import { ClientModel } from 'src/app/shared/models/client.model';
import { PhoneModel } from 'src/app/shared/models/phone.model';

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
  changeRadio!: MatRadioChange;
  phones: PhoneModel[] = [];

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private dialog: MatDialog,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createFormRegisterClient();
    this.initClient(this.client);

  }

  initClient(client: ClientModel){
    if(client == undefined){
      this.newPhone();
    }

    if(client.id != undefined){

      client.phone.forEach((p: PhoneModel) => {
        this.phonesArray.push(
          this.fb.group({
            id: p.id,
            phone: p.phone,
          })
        );
      });

      if(client.people == "pf"){
        this.hiddenPeoplePj = true;
        this.hiddenPeoplePf = false;
        this.hiddenPhone = false;
      }
  
      if(client.people == "pj"){
        this.hiddenPeoplePf = true;
        this.hiddenPeoplePj = false;
        this.hiddenPhone = false;
      }



    }
  }

  createFormRegisterClient(){
    this.formRegisterClient = this.fb.group({
      id: ['' || this.client?.id], 
      name: ['' || this.client?.name],
      people: ['' || this.client?.people],
      cpf: ['' || this.client?.cpf ],
      cnpj:['' || this.client?.cnpj],
      rg: ['' || this.client?.rg],
      ie: ['' || this.client?.ie],
      dateRegister: ['' || this.client?.dateRegister],
      active: ['' || this.client?.active],
      phone: this.fb.array([]),
    });
  }

  selectPeople(valueChange: MatRadioChange){
    console.log(valueChange);
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
        id: [''],
        phone: [''],
      })
    );
  }

  get phonesArray(): FormArray{
    return this.formRegisterClient.get('phone') as FormArray;
  }

  submit(){
    let client: ClientModel = this.formRegisterClient.getRawValue(); 
    
    this.clientService.save(client).pipe(
      tap((response: ClientModel) => {
        this.toast.success(response.name + " foi cadastrado.","Sucesso");
        this.formRegisterClient.reset();
        this.close();
        return response;
      }),
      catchError((error) => {
        this.toast.error(error.error.message,"Erro");
        return error;
      })
    ).subscribe();
  }

  close(){
    return this.dialog.closeAll();
  }

  update(){
    let client: ClientModel = this.formRegisterClient.getRawValue(); 
    
    this.clientService.put(client).pipe(
      tap((response: ClientModel) => {
        this.toast.success(response.name + " foi atualizado.","Sucesso");
        this.formRegisterClient.reset();
        this.close();
        return response;
      }),
      catchError((error) => {
        this.toast.error(error.error.message,"Erro");
        return error;
      })
    ).subscribe();

  }
  
}
