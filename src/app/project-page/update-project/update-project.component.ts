import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProjectService} from "../../service/project-service";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../../model/project";
import { ThisReceiver } from '@angular/compiler';



@Component({
    selector: 'app-update-project',
    templateUrl: './update-project.component.html',
    styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
    currentProject: Project;
    formControlGroup: FormGroup = this.formBuilder.group({
        name: new FormControl(''),
        description: new FormControl(''),
    });

    constructor(
        private formBuilder: FormBuilder,
        private projectService: ProjectService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let projectId = this.route.snapshot.params['id'];
        this.projectService.get(projectId).subscribe(result => {
            console.log(result);
            this.currentProject = result;
            this.formControlGroup = this.formBuilder.group({
                name: new FormControl(result.name),
                description: new FormControl(result.description),
            });
        });
    }

    updateProject() {
        console.log("Form = ", this.formControlGroup.getRawValue())
        let project: Project = new Project();
        project.id = this.currentProject.id;
        project.company = this.currentProject.company;
        project.name = this.formControlGroup.controls["name"].value;
        project.description = this.formControlGroup.controls["description"].value;

        this.projectService.update(project).subscribe(result => {
            console.log(result);
        })
        
    }
}