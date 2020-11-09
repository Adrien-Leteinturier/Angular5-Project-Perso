import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from "./skills.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ SkillsComponent ],
    exports: [ SkillsComponent ]
})
export class SkillsModule {

}