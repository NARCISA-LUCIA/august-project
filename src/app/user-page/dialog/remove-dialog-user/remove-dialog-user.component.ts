import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-dialog-user',
  templateUrl: './remove-dialog-user.component.html',
  styleUrls: ['./remove-dialog-user.component.css']
})
export class RemoveDialogUserComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<RemoveDialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
