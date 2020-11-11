import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';

declare var anime: any;
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService) { }
    
  login() {
    this.authService.loginWithGoogle();
  }

  ngOnInit() {
    const main = document.getElementById('main-content');
    $('a[href^="#"]').click(function(){  
      console.log('yeah')
      var id = $(this).attr("href");
      var offset = $(id).offset().top 
      $(main).animate({scrollTop: offset}, 'slow'); 
      return false;  
    }); 

  }

}
