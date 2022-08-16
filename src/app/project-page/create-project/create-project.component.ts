import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProjectService } from '../../service/project-service';
import { Project } from '../../model/project';
import { Company } from '../../model/company';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {}

  createProject() {
    console.log('Form = ', this.formControlGroup.getRawValue());
    let project: Project = new Project();
    project.name = this.formControlGroup.controls['name'].value;
    project.description = this.formControlGroup.controls['description'].value;
    project.company = new Company();
    project.company.id = 14;
    this.projectService.create(project).subscribe((result: Project) => {
      if (result) {
        console.log('result = ', result);
      }
    });
  }
}
