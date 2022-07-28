import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-remove-dialog',
    templateUrl: './remove-dialog.component.html',
    styleUrls: ['./remove-dialog.component.css']
})
export class RemoveDialogComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<RemoveDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }

    ngOnInit(): void {
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
