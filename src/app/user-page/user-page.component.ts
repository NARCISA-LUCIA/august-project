import { FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../model/user';
import { UserService } from '../service/user-service';
import { RemoveDialogUserComponent } from './dialog/remove-dialog-user/remove-dialog-user.component';
import { UserEditDialogComponent } from './dialog/user-edit-dialog/user-edit-dialog.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'remove',
    'openNewTab',
  ];
  users: User[];
  dataSource: MatTableDataSource<User>;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllByCompanyId(14).subscribe((result) => {
      console.log(result);
      this.dataSource = new MatTableDataSource<User>(result);
    });
  }
  openDialog(data: User): void {
    const name = data.firstName;
    const dialogRef = this.dialog.open(RemoveDialogUserComponent, {
      data: {
        name,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed');
      if (result != null) {
        this.userService.delete(data.id).subscribe(
          () => {
            console.log('User was removed');
            const index = this.dataSource.data.findIndex(
              (user) => user.id === data.id
            );
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          },
          () => console.log('User was not removed')
        );
      }
    });
  }

  openNewTab(data: User) {
    const userUrl = '/user/' + data.id + '/update';
    window.open(userUrl);
  }

  openUserEditDialog(user: User): void {
    const formControlGroup = this.formBuilder.group({
      firstName: new FormControl(user.firstName),
      lastName: new FormControl(user.lastName),
      email: new FormControl(user.email),
    });
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      data: {
        formControlGroup,
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(' Dialog closed ');
      if (data != null) {
        user.firstName = data.formControlGroup.controls['firstName'].value;
        user.lastName = data.formControlGroup.controls['lastName'].value;
        user.email = data.formControlGroup.controls['email'].value;
        this.userService.update(user).subscribe(
          () => {
            console.log('User was updated');
          },
          () => console.log('User was not updated')
        );
      }
    });
  }
}
