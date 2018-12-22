import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobsLocal() {
    return this.http.get('assets/jobs.json')
  }
  getJobs() {
    return this.http.get('https://myhammexam.firebaseio.com/body.json')
  }

  getDetails(jobId) {
    return this.http.get('https://myhammexam.firebaseio.com/body.json')
  }
}
