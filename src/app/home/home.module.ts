import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavComponent } from '../nav/nav.component';
import { NavModule } from '../nav/nav.module';
import { PresModule } from '../presentation/presentation.module';
import { SkillsModule } from '../skills/skills.module';
import { JobModule } from '../job/job.module';
import { ExpsModule } from '../exps/exps.module';
import { FooterComponent } from '../footer/footer.component';
import { ScrollBackButtonComponent } from '../scroll-back-button/scroll-back-button.component';


@NgModule({
    imports: [ 
        CommonModule,
        NavModule,
        PresModule,
        SkillsModule,
        JobModule,
        ExpsModule,
    ],
    declarations: [ 
        HomeComponent,
        FooterComponent,
        ScrollBackButtonComponent
     ],
    exports: [ HomeComponent ],
    providers: [  ]
})
export class homeModule {

}

