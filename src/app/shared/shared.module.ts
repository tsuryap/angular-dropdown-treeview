import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTreeviewComponent } from './select-treeview/select-treeview.component';
import {TreeModule} from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SelectTreeviewComponent],
  imports: [
    CommonModule,
    TreeModule,
    HttpClientModule
  ],
  exports: [SelectTreeviewComponent, TreeModule, HttpClientModule]
})
export class SharedModule { }
