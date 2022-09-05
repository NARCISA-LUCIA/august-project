import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Location } from '@angular/common';

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
import { UserPageComponent } from './user-page/user-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { CreateProjectComponent } from './project-page/create-project/create-project.component';
import {ProjectService} from "./service/project-service";
import { UpdateProjectComponent } from './project-page/update-project/update-project.component';
import { RemoveDialogProjectComponent } from './project-page/dialog/remove-dialog-project/remove-dialog-project.component';
import { CreateUserComponent } from './user-page/create-user/create-user.component';
import { UserService } from './service/user-service';
import { RemoveDialogUserComponent } from './user-page/dialog/remove-dialog-user/remove-dialog-user.component';
import { UpdateUserComponent } from './user-page/update-user/update-user.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
    declarations: [
        AppComponent,
        CompanyPageComponent,
        CreateCompanyComponent,
        UpdateCompanyComponent,
        RemoveDialogComponent,
        UserPageComponent,
        ProjectPageComponent,
        CreateProjectComponent,
        UpdateProjectComponent,
        RemoveDialogProjectComponent,
        CreateUserComponent,
        RemoveDialogUserComponent,
        UpdateUserComponent
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
        MatToolbarModule,
        MatMenuModule,
    ],
    providers: [HttpClient, CompanyService, ProjectService, UserService, Location],
    bootstrap: [AppComponent]
})
export class AppModule {
}
