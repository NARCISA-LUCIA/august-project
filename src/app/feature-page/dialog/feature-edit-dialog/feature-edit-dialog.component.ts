import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-edit-dialog',
  templateUrl: './feature-edit-dialog.component.html',
  styleUrls: ['./feature-edit-dialog.component.css']
})
export class FeatureEditDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FeatureEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
