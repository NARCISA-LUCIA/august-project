import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Company } from 'src/app/model/company';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user-service';
import { Location} from '@angular/common';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private location: Location,
    
  ) { }

  ngOnInit(): void {
  }

  createUser() {
    console.log('Form = ', this.formControlGroup.getRawValue());
    let user: User = new User();
    user.firstName = this.formControlGroup.controls['firstName'].value;
    user.lastName = this.formControlGroup.controls['lastName'].value;
    user.email = this.formControlGroup.controls['email'].value;
    user.company = new Company();
    user.company.id = 14;
    this.userService.create(user).subscribe((result: User) => {
      if (result) {
        console.log('result = ', result);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
