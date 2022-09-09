import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user-service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-edit-dialog',
  templateUrl: './feature-edit-dialog.component.html',
  styleUrls: ['./feature-edit-dialog.component.css'],
})
export class FeatureEditDialogComponent implements OnInit {
  users: User[] = [];
  constructor(
    private dialogRef: MatDialogRef<FeatureEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsersByCompanyIdAndProjectId(14, 16).subscribe(
      (result) => {
        console.log('Users fetched');
        this.users = result;
      },
      () => {
        console.log('Users failed');
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getAllUsers(): User[] {
    return [];
  }
}
