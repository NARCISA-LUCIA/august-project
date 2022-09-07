import { FormBuilder, FormControl } from '@angular/forms';
import { FeatureEditDialogComponent } from './dialog/feature-edit-dialog/feature-edit-dialog.component';
import { RemoveDialogComponent } from './../company-page/dialog/remove-dialog/remove-dialog.component';
import { Feature } from './../model/feature';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FeatureService } from './../service/feature-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.css'],
})
export class FeaturePageComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'remove',
    'openNewTab',
  ];
  feature: Feature[];
  dataSource: MatTableDataSource<Feature>;
  constructor(
    private featureService: FeatureService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getFeatures();
  }

  getFeatures(): void {
    this.featureService.getAllByProjectId(16).subscribe((result) => {
      console.log(result);
      this.dataSource = new MatTableDataSource<Feature>(result);
    });
  }
  openDialog(data: Feature): void {
    const title = data.title;
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      data: {
        title,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed');
      if (result != null) {
        this.featureService.delete(data.id).subscribe(
          () => {
            console.log('Feature was removed');
            const index = this.dataSource.data.findIndex(
              (feature) => feature.id === data.id
            );
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          },
          () => console.log('Feature was not removed')
        );
      }
    });
  }

  openNewTab(data: Feature) {
    const featureUrl = '/feature/' + data.id + '/update';
    window.open(featureUrl);
  }

  openFeatureEditDialog(feature: Feature): void {
    const formControlGroup = this.formBuilder.group({
      title: new FormControl(feature.title),
      description: new FormControl(feature.description),
    });
    const dialogRef = this.dialog.open(FeatureEditDialogComponent, {
      data: {
        formControlGroup,
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(' Dialog closed ');
      if (data != null) {
        feature.title = data.formControlGroup.controls['title'].value;
        feature.description =
          data.formControlGroup.controls['description'].value;
        this.featureService.update(feature).subscribe(
          () => {
            console.log('Feature was updated');
          },
          () => console.log('Feature was not updated')
        );
      }
    });
  }
}
