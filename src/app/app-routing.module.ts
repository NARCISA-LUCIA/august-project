import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCompanyComponent} from "./company-page/create-company/create-company.component";

const routes: Routes = [
  {path:"create-company", component:CreateCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
