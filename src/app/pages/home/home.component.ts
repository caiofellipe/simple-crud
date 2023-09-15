import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientModel } from 'src/app/shared/models/client.model';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  checked: boolean = false;
  form!: FormGroup;
  clients: ClientModel[] = [];
  dataSource: any;
  displayedColumns: string[] = ['name', 'people', 'dateRegister', 'active'];
  
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
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
    this.form.getRawValue();
  }

  openModalNewClient(){
    return this.dialog.open(HomeDialogComponent);
  }

  editClient(element: any){
    console.log(element);
  }

}
