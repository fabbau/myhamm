import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs$: Object

  constructor(private route: ActivatedRoute, private data: JobsService) { 
    this.route.params.subscribe( params => this.jobs$ = params.id );
  }

  ngOnInit() {
  }

}
