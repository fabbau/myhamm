import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {JobDetailComponent } from './job-detail/job-detail.component';

const routes: Routes = [
  {
    path: '',
    component: JobDetailComponent
  },
  {
    path: 'job-detail/:id',
    component: JobDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
