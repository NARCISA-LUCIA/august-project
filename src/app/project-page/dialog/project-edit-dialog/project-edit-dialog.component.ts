import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.css']
})
export class ProjectEditDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ProjectEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }


  onCancel(): void {
    this.dialogRef.close();
  }
}
