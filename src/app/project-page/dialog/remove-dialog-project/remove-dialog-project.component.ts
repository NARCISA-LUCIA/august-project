import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-dialog-project',
  templateUrl: './remove-dialog-project.component.html',
  styleUrls: ['./remove-dialog-project.component.css'],
})
export class RemoveDialogProjectComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<RemoveDialogProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
