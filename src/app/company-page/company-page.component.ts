import {Component, OnInit} from '@angular/core';
import {MatTable, MatTableDataSource, MatTableModule} from "@angular/material/table";
import {Company} from "../model/company";
import {FormBuilder} from "@angular/forms";
import {CompanyService} from "../service/company-service";

const elementData: Company[] = [
    {
        id: 1,
        name: "Lenovo",
        address: "street",
        country: "America",
        registrationNumber: "13790700",
        email: "rusnarcisa16@gmail.com",
        city:"Los Angeles",
        phone:"0746137512",
        vatNumber:"ro13790700",
    },

]


class UserService {
}

@Component({
    selector: 'app-company-page',
    templateUrl: './company-page.component.html',
    styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
    displayedColumns: string[] = ["id", "name", "address", "country", "registrationNumber", "email", "remove"];
    dataSource = [...elementData];

    table: MatTable<Company>;
    addData() {
        const randomElementIndex = Math.floor(Math.random() * elementData.length);
        this.dataSource.push(elementData[randomElementIndex]);
        this.table.renderRows();
    }

    removeData() {
        this.dataSource.pop();
        this.table.renderRows();
    }
    constructor(
        private formBuilder: FormBuilder,
        private companyService: CompanyService
    ) {
    }


    ngOnInit(): void {

    }
}


