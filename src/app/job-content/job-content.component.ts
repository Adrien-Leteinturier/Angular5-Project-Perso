import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../job/job';
import { JobService } from '../job/job.service';

@Component({
  selector: 'app-job-content',
  templateUrl: './job-content.component.html',
  styleUrls: ['./job-content.component.css']
})
export class JobContentComponent implements OnInit {

  jobs: Job;
  index: number;

  constructor(private route: ActivatedRoute, public _jobService: JobService) {
    this.route.params.subscribe(params => {
      this.index = params['index'];
    });
  }

  ngOnInit(): void {
    this.callJobServiceFor();
  }

  private callJobServiceFor() {
    this._jobService.getJobsFromAPIwithCache()
    .subscribe(res => {
      this.jobs = res[this.index]
      console.log(this.jobs);
    }, err => console.error(err.status));
  }

}
