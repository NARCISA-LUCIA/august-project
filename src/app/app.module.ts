
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
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserEditDialogComponent } from './user-page/dialog/user-edit-dialog/user-edit-dialog.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { CreateFeatureComponent } from './feature-page/create-feature/create-feature.component';
import { UpdateFeatureComponent } from './feature-page/update-feature/update-feature.component';
import { FeatureEditDialogComponent } from './feature-page/dialog/feature-edit-dialog/feature-edit-dialog.component';
import { FeatureService } from './service/feature-service';
import { CompanyEditDialogComponent } from './company-page/dialog/company-edit-dialog/company-edit-dialog.component';
import { ProjectEditDialogComponent } from './project-page/dialog/project-edit-dialog/project-edit-dialog.component';
import {MatSelectModule} from '@angular/material/select';
    
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
        UpdateUserComponent,
        NavigationPageComponent,
        UserEditDialogComponent,
        FeaturePageComponent,
        CreateFeatureComponent,
        UpdateFeatureComponent,
        FeatureEditDialogComponent,
        CompanyEditDialogComponent,
        ProjectEditDialogComponent,
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
        MatSidenavModule,
        MatSelectModule,
    ],
    
    providers: [HttpClient, CompanyService, ProjectService, UserService, Location, FeatureService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
