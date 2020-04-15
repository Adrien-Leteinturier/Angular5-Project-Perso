import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl , FormBuilder,  Validators, FormGroup } from '@angular/forms';
import { ElementFormsService } from '../element-forms/element-forms.service';
import { PresentationService } from '../presentation/presentation.service';
import { BlotterService } from '../blotterService/blotter.service'
import { Socials } from '../presentation/socials';
import { QuotesService } from '../quotesService/quotes.service';
import account_validation_messages from '../config/error_inputs';
import labels from '../config/labels';
import {ToastaService, ToastaConfig} from 'ngx-toasta';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(
    public elementFormService: ElementFormsService,
    public fb: FormBuilder, 
    public el : ElementRef,
    public presentationService: PresentationService,
    public blotterService: BlotterService,
    public quotesService: QuotesService,
    public toastaService:ToastaService,
    public toastaConfig: ToastaConfig
  ) {
    this.toastaConfig.theme = 'material';
  }

  accountDetailsForm: FormGroup;
  validationConfig = account_validation_messages;
  labelInputs = labels.input[0];
  socials: Socials[];
  quotesContent:string[];
  quotesTitle:string[];
  quotesLink:string[];
  
  ngOnInit() {
    this.createForms();
    this.presentationService.getSocialsFromAPIwithCache()
    .subscribe( 
        res => this.socials = res,
        err => console.error(err.status)
    ); 
    this.blotterService.mainBlotterSliding('Contactez-moi','Alfa Slab One, cursive',45,'#7985A1',8,0.25,true)
  }
  
  postMailMessage = (formValue) =>{
        if(this.accountDetailsForm.valid === true){
          this.elementFormService.postContactForm(formValue);
          this.accountDetailsForm.reset('');
          this.toastFc('succes','Votre message est envoyé');
        } else if(this.accountDetailsForm.valid === false || this.accountDetailsForm.value.username == "" || this.accountDetailsForm.value.email == "") {
          this.toastFc('error','Erreur !!! Votre message n\'a pas été envoyé, Vérifier votre saisie...');
        }
  }
  

  createForms = () =>{
    // user links form validations
    this.accountDetailsForm = this.fb.group({
      username: new FormControl('', Validators.compose([
       Validators.maxLength(25),
       Validators.minLength(5),
       Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      message: new FormControl('', Validators.compose([
        Validators.minLength(5)
       ]))      
    })
  }


  toastFc = (type,text) =>{
    switch (type) {
      case 'succes':
        this.toastaService.success(text);
      break;
      case 'error':
        this.toastaService.error(text);
      break;  
      case 'warning':
        this.toastaService.warning(text);
      break;
      case 'info':
        this.toastaService.info(text);
      break;
    }
  }; 

};
