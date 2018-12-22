import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 


  jobs$: Object;
  titleSubstr: String;
  isActive: false;

  links = ["L1", "L2", "L3"]

  constructor(private jobs: JobsService) { }

  ngOnInit() {
    this.jobs.getJobs().subscribe(
      (data) => {
        this.jobs$ = data,
        console.log('appC: ' + data)
      }
    );
  }
}
