import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCompanyComponent } from './company-page/create-company/create-company.component';
import { UpdateCompanyComponent } from './company-page/update-company/update-company.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { CreateProjectComponent } from './project-page/create-project/create-project.component';
import { UpdateProjectComponent } from './project-page/update-project/update-project.component';
import { CreateUserComponent } from './user-page/create-user/create-user.component';
import { UpdateUserComponent } from './user-page/update-user/update-user.component';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';

const routes: Routes = [
  { path: 'company/create', component: CreateCompanyComponent },
  { path: 'company/:id/update', component: UpdateCompanyComponent },
  { path: 'companies', component: CompanyPageComponent },
  { path: 'projects', component: ProjectPageComponent },
  { path: 'project/create', component: CreateProjectComponent },
  { path: 'project/:id/update', component: UpdateProjectComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'user/create', component: CreateUserComponent },
  { path: 'user/:id/update', component: UpdateUserComponent },
  { path: 'navigation', component: NavigationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
