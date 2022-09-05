
import { Feature } from './../../model/feature';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from './../../service/feature-service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Project } from "./../../model/project";

@Component({
  selector: 'app-update-feature',
  templateUrl: './update-feature.component.html',
  styleUrls: ['./update-feature.component.css']
})
export class UpdateFeatureComponent implements OnInit {

  currentFeature: Feature;
  formControlGroup: FormGroup = this.formBuilder.group({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private featureService: FeatureService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    let featureId = this.route.snapshot.params['id'];
    this.featureService.get(featureId).subscribe((result) => {
      console.log(result);
      this.currentFeature = result;
      this.formControlGroup = this.formBuilder.group({
        title: new FormControl(result.title),
        description: new FormControl(result.description),
      });
    });
  }

  updateFeature() {
    console.log('Update Form = ', this.formControlGroup.getRawValue());
    let feature: Feature = new Feature();
    feature.id = this.currentFeature.id;
    feature.project = this.currentFeature.project;
    feature.title = this.formControlGroup.controls['title'].value;
    feature.description = this.formControlGroup.controls['description'].value;

    this.featureService.update(feature).subscribe((result) => {
      console.log(result);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
