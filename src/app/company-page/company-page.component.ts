import {Component, OnInit} from '@angular/core';
import {Company} from "../model/company";
import {CompanyService} from "../service/company-service";
import {Observable} from "rxjs";


@Component({
    selector: 'app-company-page',
    templateUrl: './company-page.component.html',
    styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
    displayedColumns: string[] = ["id", "name", "address", "country", "registrationNumber", "email", "remove"];

    companies: Company[];

    constructor(
        private companyService: CompanyService) {
    }

    getCompanies() {
        this.companyService.getAll().subscribe(result => {
            console.log(result);
            this.companies = result;
        });
    }

    ngOnInit(): void {
        this.getCompanies();
    }
}

