import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MoreComponent } from './pages/more/more.component';
import { ContentComponent } from './pages/content/content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    MoreComponent,
    ContentComponent,
    DashboardComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
