import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  jobId$: number
  job$: Object

  constructor(private route: ActivatedRoute, private data: JobsService) { 
    this.route.params.subscribe( params => this.jobId$ = params.id );
 }

  ngOnInit() {
    this.data.getJobs().subscribe(
      data => this.job$ = data 
    );
  }

}
