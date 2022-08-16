import { Component, OnInit } from '@angular/core';
import {Project} from "../model/project";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ProjectService} from "../service/project-service";
import {RemoveDialogProjectComponent} from "./dialog/remove-dialog-project/remove-dialog-project.component";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "description", "remove"];
  projects: Project[];
  dataSource: MatTableDataSource<Project>;

  constructor(
      private projectService: ProjectService,
      private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }


  getProjects(): void {
    this.projectService.getAll(14).subscribe(result => {
      console.log(result);
      this.dataSource = new MatTableDataSource<Project>(result);
    });
  }

  openDialog(data: Project): void {
    const name= data.name;
    const dialogRef = this.dialog.open(RemoveDialogProjectComponent, {
      data: {
        name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      if (result != null) {
        this.projectService.delete(data.id).subscribe(
            () => {
              console.log("Project was removed");
              const index = this.dataSource.data.findIndex(project => project.id === data.id);
              this.dataSource.data.splice(index, 1);
              this.dataSource._updateChangeSubscription();
            },
            () => console.log("Project was not removed")
        );
      }
    });
  }
}
