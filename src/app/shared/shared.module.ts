/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';

/* our own custom components */
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  
  declarations: [
  ],
  exports: [
    /* angular stuff */
    CommonModule,
    ReactiveFormsModule,

    /* 3rd party components */

    /* our own custom components */
  ]
})
export class SharedModule { }