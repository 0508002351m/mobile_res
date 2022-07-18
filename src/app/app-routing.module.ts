import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LoginComponent } from './pages/login/login.component';
import { MoreComponent } from './pages/more/more.component';

const routes: Routes = [
  {path:'',component: DashboardComponent},
  {path:'login',component: LoginComponent},
  {path:'more',component: MoreComponent},
  {path:'content',component: ContentComponent},
  {path:'jobs',component: JobsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
