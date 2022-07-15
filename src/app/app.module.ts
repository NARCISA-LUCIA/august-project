import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CompanyPageComponent} from './company-page/company-page.component';
import {CreateCompanyComponent} from './company-page/create-company/create-company.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CompanyService} from "./service/company-service";
import { UpdateCompanyComponent } from './company-page/update-company/update-company.component';


@NgModule({
    declarations: [
        AppComponent,
        CompanyPageComponent,
        CreateCompanyComponent,
        UpdateCompanyComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [HttpClient, CompanyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
