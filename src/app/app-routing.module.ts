import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCompanyComponent} from "./company-page/create-company/create-company.component";
import {UpdateCompanyComponent} from "./company-page/update-company/update-company.component";

const routes: Routes = [
  {path:"company/create", component:CreateCompanyComponent},
  {path:"company/update", component:UpdateCompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
