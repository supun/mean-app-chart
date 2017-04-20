/*
 * @Author: Supun Dharmarathne 
 * @Date: 2017-04-03 16:24:16 
 * @Last Modified by: Supun Dharmarathne
 * @Last Modified time: 2017-04-06 18:16:15
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { DataTableModule } from "angular2-datatable";
import { TreeModule } from 'angular-tree-component';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ToolbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    [MaterialModule.forRoot(),FlexLayoutModule],
    ChartsModule,
    DataTableModule,
    TreeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
