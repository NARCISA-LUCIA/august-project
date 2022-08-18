import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  currentUser: User;
  formControlGroup: FormGroup = this.formBuilder.group({
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    let userId = this.route.snapshot.params['id'];
    this.userService.get(userId).subscribe((result) => {
      console.log(result);
      this.currentUser = result;
      this.formControlGroup = this.formBuilder.group({
        firstName: new FormControl(result.firstName),
        lastName: new FormControl(result.lastName),
        email: new FormControl(result.email),
      });
    });
  }

  updateUser() {
    console.log('Update Form = ', this.formControlGroup.getRawValue());
    let user: User = new User();
    user.id = this.currentUser.id;
    user.company = this.currentUser.company;
    user.firstName = this.formControlGroup.controls['firstName'].value;
    user.lastName = this.formControlGroup.controls['lastName'].value;
    user.email = this.formControlGroup.controls['email'].value;

    this.userService.update(user).subscribe((result) => {
      console.log(result);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
