import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../service/company-service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { Company } from "../../model/company";
import { Location} from '@angular/common';

@Component({
    selector: 'app-create-company',
    templateUrl: './create-company.component.html',
    styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
    formControlGroup: FormGroup = this.formBuilder.group({
        address: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl(''),
        email: new FormControl(''),
        name: new FormControl(''),
        phone: new FormControl(''),
        registrationNumber: new FormControl(''),
        vatNumber: new FormControl(''),
    });

    constructor(
        private formBuilder: FormBuilder,
        private companyService: CompanyService,
        private location: Location,
    ) {
    }

    ngOnInit(): void {
        this.companyService.get(2).subscribe(result => {
            console.log(result);
        });
    }

    createCompany() {
        console.log("Form = ", this.formControlGroup.getRawValue())
        let company: Company = new Company();
        company.address = this.formControlGroup.controls["address"].value;
        company.name = this.formControlGroup.controls["name"].value;
        company.city = this.formControlGroup.controls["city"].value;
        company.country = this.formControlGroup.controls["country"].value;
        company.email = this.formControlGroup.controls["email"].value;
        company.phone = this.formControlGroup.controls["phone"].value;
        company.registrationNumber = this.formControlGroup.controls["registrationNumber"].value;
        company.vatNumber = this.formControlGroup.controls["vatNumber"].value;

        this.companyService.create(company).subscribe((result: Company) => {
            if (result) {
                console.log("result = ", result)
            }
        });
    }

    goBack() {
        this.location.back();
    }
}


