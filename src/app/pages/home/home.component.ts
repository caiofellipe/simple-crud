import { RequestClientModel } from './../../shared/models/requestClient.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientModel } from 'src/app/shared/models/client.model';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { ClientService } from 'src/app/core/services/client.service';
import { catchError, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  checked: boolean = false;
  form!: FormGroup;
  clients: ClientModel[] = [];
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private clientService: ClientService,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      active: ['']
    });
  }

  submit(){
    let request: RequestClientModel = this.form.getRawValue();
    this.clientService.get(request).pipe(
      tap((response: ClientModel[]) => {
        this.clients.push(...response);
        this.toast.success("", "Sucesso");
      }),
      catchError((error) => {
        this.toast.error(error.error.message, "Erro");
        return error.message;
      })
    ).subscribe();
    return this.clients;
  }

  openModalNewClient(){
    return this.dialog.open(HomeDialogComponent);
  }

  edit(client: ClientModel){
    console.log(client);
  }

  disable(client: ClientModel){
    console.log(client);
  }

  changePeople(people: string){
    if(people == "pf"){
      return "Pessoa Física";
    }

    if(people == "pj"){
      return "Pessoa Física";
    }

    return;
  }

  changeDateRegister(date: Date){
    return new Date(new Date(date)).toLocaleString('pt-BR', this.options);
  }

}
