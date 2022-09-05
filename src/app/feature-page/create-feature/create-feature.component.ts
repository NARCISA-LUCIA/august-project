import { Project } from './../../model/project';
import { Feature } from './../../model/feature';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FeatureService } from './../../service/feature-service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'app-create-feature',
  templateUrl: './create-feature.component.html',
  styleUrls: ['./create-feature.component.css']
})
export class CreateFeatureComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    title: new FormControl(''),
    description: new FormControl(''),
    
  });

  constructor(
    private formBuilder: FormBuilder,
    private featureService: FeatureService,
    private location: Location,
    
  ) { }

  ngOnInit(): void {
  }

  createFeature() {
    console.log('Form = ', this.formControlGroup.getRawValue());
    let feature: Feature = new Feature();
    feature.title = this.formControlGroup.controls['title'].value;
    feature.description = this.formControlGroup.controls['description'].value;
    feature.project = new Project();
    feature.project.id = 16;
    this.featureService.create(feature).subscribe((result: Feature) => {
      if (result) {
        console.log('result = ', result);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }


}
