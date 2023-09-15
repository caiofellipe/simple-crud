import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from "ngx-toastr";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      NgxMaskModule.forRoot(),
      ToastrModule.forRoot(),
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatSlideToggleModule,
      MatDialogModule,
      MatRadioModule,
      MatTableModule
    ],
    exports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      NgxMaskModule,
      ToastrModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatSlideToggleModule,
      MatDialogModule,
      MatRadioModule,
      MatTableModule
    ],
  })
  export class UiModule { }