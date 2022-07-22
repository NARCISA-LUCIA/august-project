import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Company} from "../model/company";
import {Observable} from "rxjs";

@Injectable()
export class CompanyService {
    constructor(
        private httpClient: HttpClient

    ) {
    }

    create(company: Company): Observable<Company> {
        let headerList = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.post<Company>(
            "/api/company",
            company,
            {
            headers: headerList,
        });
    }

   get(id:number):Observable<Company>{
       const url = "/api/company/"+id;
        return this.httpClient.get<Company>(url);
    }

    getAll():Observable<Company[]>{
        const url = "/api/company/all";
        return this.httpClient.get<Company[]>(url);
    }

    update(company: Company): Observable<Company> {
        let headerList = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.put<Company>(
            "/api/company",
            company,
            {
                headers: headerList,
            });
    }
}