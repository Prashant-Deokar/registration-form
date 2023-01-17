import { NgModule } from '@angular/core';
//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { CreateMemberComponent } from './create-member/create-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { ViewMemberByIdComponent } from './view-member-by-id/view-member-by-id.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import {AccordionModule} from 'primeng/accordion';  
import {DialogModule} from 'primeng/dialog';   //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import {TableModule} from 'primeng/table';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    CreateMemberComponent,
    ViewMemberComponent,
    ViewMemberByIdComponent,
    UpdateMemberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    CardModule,
    CalendarModule,
    CheckboxModule,
    HttpClientModule,
    AccordionModule,
    DialogModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    NgxUiLoaderModule,
    // NgxUiLoaderRouterModule,
    TableModule,
    ToastModule,
    // NgbModule
    
 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
