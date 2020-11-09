import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PresentationService } from './presentation.service';
import { Socials } from './socials';


@Component({
    moduleId: module.id,
    selector: 'app-pres',
    templateUrl: 'presentation.component.html',
    styleUrls: ['presentation.component.css']
})

export class PresComponent implements OnInit{
    
    socials: Socials[];
    
    constructor(public _PresentationService : PresentationService){}
    
    
    ngOnInit(){
        this.getSocials(); 
    }
    
    
    private getSocials() {
        this._PresentationService.getSocialsFromAPIwithCache()
        .subscribe(
            res => this.socials = res,
            err => console.error(err.status)
            );
        }
    }