import { CompanyEditDialogComponent } from './dialog/company-edit-dialog/company-edit-dialog.component';
import { FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { CompanyService } from '../service/company-service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RemoveDialogComponent } from './dialog/remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css'],
})
export class CompanyPageComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'address',
    'country',
    'registrationNumber',
    'email',
    'remove',
    'openNewTab',
  ];
  companies: Company[];
  dataSource: MatTableDataSource<Company>;

  constructor(
    private companyService: CompanyService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getAll().subscribe((result) => {
      console.log(result);
      this.dataSource = new MatTableDataSource<Company>(result);
    });
  }

  openDialog(data: Company): void {
    const name = data.name;
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      data: {
        name,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed');
      if (result != null) {
        this.companyService.delete(data.id).subscribe(
          () => {
            console.log('Company was removed');
            const index = this.dataSource.data.findIndex(
              (company) => company.id === data.id
            );
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          },
          () => console.log('Company was not removed')
        );
      }
    });
  }

  openNewTab(data: Company) {
    const companyUrl = '/company/' + data.id + '/update';
    window.open(companyUrl);
  }

  openCompanyEditDialog(company: Company): void {
    const formControlGroup = this.formBuilder.group({
      name: new FormControl(company.name),
      address: new FormControl(company.address),
      country: new FormControl(company.country),
      registrationNumber: new FormControl(company.registrationNumber),
      email: new FormControl(company.email),
    });
    const dialogRef = this.dialog.open(CompanyEditDialogComponent, {
      data: {
        formControlGroup,
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(' Dialog closed ');
      if (data != null) {
        company.name = data.formControlGroup.controls['name'].value;
        company.address = data.formControlGroup.controls['address'].value;
        company.country = data.formControlGroup.controls['country'].value;
        company.registrationNumber = data.formControlGroup.controls['registrationNumber'].value;
        company.email = data.formControlGroup.controls['email'].value;

        this.companyService.update(company).subscribe(
          () => {
            console.log('Company was updated');
          },
          () => console.log('Company was not updated')
        );
      }
    });
  }
}
