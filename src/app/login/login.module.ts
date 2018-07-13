import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import * as $ from 'jquery';

@NgModule({
    imports: [
        CommonModule,FormsModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
