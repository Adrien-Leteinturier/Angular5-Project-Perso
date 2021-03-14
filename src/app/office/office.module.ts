import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office.component';
import { ElementFormsModule } from '../element-forms/element-forms.module';
import { NewsApiComponent } from '../newsApi/news-api.component';


@NgModule({
    imports: [ 
        CommonModule,
        ElementFormsModule,

     ],
    declarations: [ 
        OfficeComponent,
        NewsApiComponent
     ],
    exports: [ OfficeComponent ],
    providers: [  ]
})
export class officeModule {

}

