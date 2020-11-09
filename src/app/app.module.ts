import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OfficeComponent } from './office/office.component';
import { PresModule } from './presentation/presentation.module';
import { SkillsModule } from './skills/skills.module';
import { JobModule } from './job/job.module';
import { ExpsModule } from './exps/exps.module';
import { ElementFormsModule } from './element-forms/element-forms.module';
import { ElementFormsService } from './element-forms/element-forms.service';
import { officeModule } from './office/office.module';
import { PresentationService } from './presentation/presentation.service';
import { WindowElementService } from './windowElement/window-element.service';
import { NewsApiService } from './newsApi/news-api.service';
import { InputValidsDirective } from './inputValids/input-valids.directive';
import { ExponentialStrengthPipe } from './exponentielle-strength.pipe';
import { environment} from '../environments/environment.prod';
import { AuthService } from './providers/auth.service';
import { HomeComponent } from './home/home.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { homeModule } from './home/home.module';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login',      component: OfficeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    InputValidsDirective,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    homeModule,
    officeModule,
    PresModule,
    SkillsModule,
    JobModule,
    ExpsModule,
    ElementFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers:  [
    AuthService,
    ElementFormsService,
    PresentationService,
    WindowElementService,
    NewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
