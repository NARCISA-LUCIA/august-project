import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from '../../service/company-service';
import { Company } from '../../model/company';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css'],
})
export class UpdateCompanyComponent implements OnInit {
  currentCompany: Company;
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
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.companyService.getAll().subscribe((result) => {
      console.log('Get all = ', result);
    });
    let companyId = this.route.snapshot.params['id'];
    this.companyService.get(companyId).subscribe((result) => {
      console.log(result);
      this.currentCompany = result;
      this.formControlGroup = this.formBuilder.group({
        address: new FormControl(result.address),
        city: new FormControl(result.city),
        country: new FormControl(result.country),
        email: new FormControl(result.email),
        name: new FormControl(result.name),
        phone: new FormControl(result.phone),
        registrationNumber: new FormControl(result.registrationNumber),
        vatNumber: new FormControl(result.vatNumber),
      });
    });
  }

  updateCompany() {
    console.log('Form = ', this.formControlGroup.getRawValue());
    let company: Company = new Company();
    company.id = this.currentCompany.id;
    company.address = this.formControlGroup.controls['address'].value;
    company.name = this.formControlGroup.controls['name'].value;
    company.city = this.formControlGroup.controls['city'].value;
    company.country = this.formControlGroup.controls['country'].value;
    company.email = this.formControlGroup.controls['email'].value;
    company.phone = this.formControlGroup.controls['phone'].value;
    company.registrationNumber =
      this.formControlGroup.controls['registrationNumber'].value;
    company.vatNumber = this.formControlGroup.controls['vatNumber'].value;

    this.companyService.update(company).subscribe((result) => {
      console.log(result);
    });
  }

  goBack() {
    this.location.back();
  }
}
