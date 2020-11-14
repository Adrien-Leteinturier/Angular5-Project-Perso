import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from "./skills.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastaModule, ToastaService } from 'ngx-toasta';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastaModule.forRoot()
    ],
    declarations: [ SkillsComponent ],
    exports: [ SkillsComponent ]
}) 
export class SkillsModule {

}