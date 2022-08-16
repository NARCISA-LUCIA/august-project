import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCompanyComponent} from "./company-page/create-company/create-company.component";
import {UpdateCompanyComponent} from "./company-page/update-company/update-company.component";
import {CompanyPageComponent} from "./company-page/company-page.component";
import {UserPageComponent} from "./user-page/user-page.component";

const routes: Routes = [
  {path:"company/create", component:CreateCompanyComponent},
  {path:"company/:id/update", component:UpdateCompanyComponent},
  {path:"companies", component:CompanyPageComponent},
  {path:"user", component:UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
