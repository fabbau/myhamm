import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  jobs$: Object  
  data: [];
  jobsCount: number = 0;
  jobsActive: number =0;

  constructor(private jobs: JobsService) { }

  ngOnInit() {
    this.jobs.getJobs().subscribe(
      (data: []) => {
        this.jobs$ = data,
        Object.keys(data).forEach(function(key) {
          if (data[key].state === 'active') {
            this.jobsActive++
            console.log('active')
          }
          if (data[key].id) {
            this.jobsCount++
            console.log('active')
          }
        }, this);
      }
  )
}


public checkJobState(String) : boolean {
  return String === 'active'
}

public checkUnreadMessages(number) : boolean {
  return number !== 0
}

}
