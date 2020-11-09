import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PresentationService } from '../presentation/presentation.service';
import { Socials } from '../presentation/socials';
import account_validation_messages from '../config/error_inputs';
import labels from '../config/labels';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(
    public presentationService: PresentationService,
  ) {
  }

  accountDetailsForm: FormGroup;
  validationConfig = account_validation_messages;
  labelInputs = labels.input[0];
  socials: Socials[];
  
  ngOnInit() {
    this.presentationService.getSocialsFromAPIwithCache()
    .subscribe( 
        res => this.socials = res,
        err => console.error(err.status)
    ); 

  }

};
