import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-edit-dialog',
  templateUrl: './company-edit-dialog.component.html',
  styleUrls: ['./company-edit-dialog.component.css'],
})
export class CompanyEditDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CompanyEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void { }
  
  onCancel(): void {
    this.dialogRef.close();
  }
}
