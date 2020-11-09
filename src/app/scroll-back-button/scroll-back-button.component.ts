import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { WindowElementService } from '../windowElement/window-element.service';

@Component({
  selector: 'app-scroll-back-button',
  templateUrl: './scroll-back-button.component.html',
  styleUrls: ['./scroll-back-button.component.css']
})
export class ScrollBackButtonComponent implements OnInit {

  window:any = this._WindowElementService.nativeWindow;

  @Input() bgColorButton: string;

  constructor(public _elementRef:ElementRef, public _WindowElementService : WindowElementService) {}

  public colorButton() { 
    this._elementRef.nativeElement.childNodes["0"].firstElementChild.style.backgroundColor = this.bgColorButton;
  } 

  public windowScrollDisplay() {
    var self = this;
    const main = document.getElementById('main-content');
    main.addEventListener('scroll',function(){
      if(main.scrollTop > 0){
        self._elementRef.nativeElement.childNodes["0"].firstElementChild.style.opacity = 1;
      } else {
        self._elementRef.nativeElement.childNodes["0"].firstElementChild.style.opacity = 0;      
      }
    });
  }

  public scrollTop(){
    this.window.scrollTo(0,0);
  }
  
  ngOnInit() {
    this.colorButton();
    this.windowScrollDisplay();
  }

}
