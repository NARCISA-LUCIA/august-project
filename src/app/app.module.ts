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
import {UpdateCompanyComponent} from './company-page/update-company/update-company.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { RemoveDialogComponent } from './company-page/dialog/remove-dialog/remove-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    declarations: [
        AppComponent,
        CompanyPageComponent,
        CreateCompanyComponent,
        UpdateCompanyComponent,
        RemoveDialogComponent
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
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatDialogModule,
        MatTooltipModule,
    ],
    providers: [HttpClient, CompanyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
