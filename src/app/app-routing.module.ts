
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
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { UpdateFeatureComponent } from './feature-page/update-feature/update-feature.component';
import { CreateFeatureComponent } from './feature-page/create-feature/create-feature.component';

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
  { path: 'feature', component: FeaturePageComponent },
  { path: 'feature/create', component: CreateFeatureComponent },
  { path: 'feature/:id/update', component: UpdateFeatureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
