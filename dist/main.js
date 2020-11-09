(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n\n<!-- \n<input class=\"input\" defaultColor=\"yellow\" [appInputValids]=\"color\">\n<p style=\"color:white;\">The hero's birthday is {{ birthday | date:format | uppercase }}</p>\n  <button (click)=\"toggleFormat()\">Toggle Format</button>\n  <h2>Power Boost Calculator</h2>\n  <div>Normal power: <input [(ngModel)]=\"power\"></div>\n  <div>Boost factor: <input [(ngModel)]=\"factor\"></div>\n  <p>\n    Super Hero Power: {{power | exponentialStrength: factor}}\n  </p>\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/element-forms/element-forms.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element-forms/element-forms.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row app-element-forms-container\">\n  <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">\n    <h2 class=\"weather-title\">Météo du jour</h2>\n    <form #form=\"ngForm\" class=\"text-center\">\n      <div class=\"mdl-textfield mdl-js-textfield input-city-container\" [class.has-error]=\"msgSubject.invalid && msgSubject.touched\">\n        <div class=\"mdl-textfield mdl-js-textfield\">\n          <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample6\" #msgSubject=\"ngModel\" ngModel name=\"msgSubject\">\n        </div>\n      </div>\n      <button (click)=\"sendPositionInputs(form)\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\" [disabled]=\"form.invalid\">Chercher</button>\n<!--       <button (click)=\"getLocation()\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\">\n        <i class=\"fa fa-compass\"></i>\n      </button> -->\n      <p class=\"weather-error-msg\" *ngIf=\"messageError\">Verifier l'ortographe de votre saisie</p>\n    </form>\n  </div>\n  <div class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\">\n    <div class=\"app-element-forms-weather-container text-center\">\n      <span>{{dataWeatherName ? dataWeatherName : 'Entrer votre ville'}}</span>\n      <div class=\"row animated flipInLeft\" *ngIf=\"dataWeatherName\">\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <i class=\"owi owi-{{iconUrl}}\"></i>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <div class=\"temperate-container\" *ngIf=\"maxTemp && minTemp\">\n\n            <p>Temperature MIN :\n              <span>{{minTemp}}°</span>\n            </p>\n            <p>Temperature MAX :\n              <span>{{maxTemp}}°</span>\n            </p>\n            <p>Taux d'humidité :\n              <span>{{humidity}}%</span>\n            </p>\n            <p>Vitesse du vent :\n              <span>{{wind}} km/h</span>\n            </p>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exps/exps.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exps/exps.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-exps\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <h2 class=\"title\">Jobs</h2>\n            <div class=\"app-exps-title-separate\">\n                <div class=\"rings\">\n                    <span><span></span></span>\n                    <span><span></span></span>\n                    <span><span></span></span>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"app-exps-container row\">\n        <div class=\"col-xs-4 col-sm-2 col-md-2 col-lg-2 mt-10\" *ngFor=\"let exp of exps\">\n            <div class=\"app-exps-container-logo-exps text-center\">\n                <div>\n                    <img class=\"app-exps-img-pastille\" src=\"{{exp.logo}}\" alt=\"\">\n                    <p>{{exp.title}}</p>\n                    <p>{{exp.fonction}}</p>\n                </div>\n            </div>\n        </div>    \n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row app-title\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center\">\n        <h1>Besoin d'un <span>Site Web</span> à votre image ou d'une visibilté sur les<span> Réseaux sociaux</span> ?</h1>\n    </div>\n</div>\n<div class=\"row app-footer-container\" >\n    <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5 app-footer-section-left\">\n        <div id=\"blotter\"></div>\n        <form [formGroup]=\"accountDetailsForm\" (ngSubmit)=\"postMailMessage(accountDetailsForm.value)\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"email\">{{labelInputs.email}}</label>\n                <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"{{labelInputs.email}}\" formControlName=\"email\" required [class.input-has-error]=\"accountDetailsForm.get('email').invalid && accountDetailsForm.get('email').touched\">\n                <div *ngFor=\"let validation of validationConfig.email\">\n                    <small id=\"emailHelpId\" class=\"form-text text-muted\" [class.has-error]=\"accountDetailsForm.get('email').hasError(validation.type)\" *ngIf=\"accountDetailsForm.get('email').hasError(validation.type) && (accountDetailsForm.get('email').dirty || accountDetailsForm.get('email').touched) \">{{validation.message}}<i class=\"fas fa-exclamation-triangle has-error absolute-input-warning-ico\"></i></small>\n                </div>      \n            </div>\n            <div class=\"form-group\">\n                <label for=\"username\">{{labelInputs.username}}</label>\n                <input id=\"username\" type=\"username\" class=\"form-control\" placeholder=\"{{labelInputs.username}}\" formControlName=\"username\" required [class.input-has-error]=\"accountDetailsForm.get('username').invalid && accountDetailsForm.get('username').touched\">\n                <div *ngFor=\"let validation of validationConfig.username\">\n                    <small id=\"usernameHelpId\" class=\"form-text text-muted\" [class.has-error]=\"accountDetailsForm.get('username').hasError(validation.type)\" *ngIf=\"accountDetailsForm.get('username').hasError(validation.type) && (accountDetailsForm.get('username').dirty || accountDetailsForm.get('username').touched)\">{{validation.message}}<i class=\"fas fa-exclamation-triangle has-error absolute-input-warning-ico\"></i></small>\n                </div>               \n            </div>\n            <div class=\"form-group\">\n                <div *ngFor=\"let validation of validationConfig.message\">\n                <label for=\"message\">{{labelInputs.message}}</label>\n                    <textarea id=\"message\" type=\"message\" class=\"form-control\" placeholder=\"{{labelInputs.message}}\" formControlName=\"message\" [class.input-has-error]=\"accountDetailsForm.get('message').hasError(validation.type)\"></textarea>\n                    <small id=\"messageHelpId\" class=\"form-text text-muted\" [class.has-error]=\"accountDetailsForm.get('message').hasError(validation.type)\" *ngIf=\"accountDetailsForm.get('message').hasError(validation.type) && (accountDetailsForm.get('message').dirty || accountDetailsForm.get('message').touched)\">{{validation.message}}<i class=\"fas fa-exclamation-triangle has-error absolute-input-warning-ico\"></i></small>\n                </div>                \n            </div>    \n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center\">\n                    <button class=\"mdl-button mdl-js-button mdl-button--raised\" type=\"submit\">Envoyer</button>\n                </div>\n            </div>                     \n        </form>\n    </div>\n    <div class=\"col-xs-12 col-sm-2 col-md-2 col-lg-2 app-footer-section-center\">\n        <div class=\"app-footer-section-center-socials\">\n            <ul>\n                <li *ngFor=\"let social of socials\">\n                    <a href=\"{{social.link}}\" title=\"{{social.title}}\"><i class=\"{{social.classIco}}\" aria-hidden=\"true\"></i></a>                    \n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5 app-footer-section-right\">\n        <div class=\"app-footer-section-right-map\">\n            <h2 class=\"opening text-center\">{{quotesContent}}</h2>\n            <a href=\"{{quotesLink}}\" target=\"_blank\"><cite>{{quotesTitle}}</cite></a>\n        </div>\n    </div>\n    <ngx-toasta [position]=\"'bottom-center'\"></ngx-toasta>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav id=\"home\"></app-nav>\n<app-pres></app-pres>\n<app-skills id=\"skills\"></app-skills>\n<app-job id=\"projects\"></app-job>\n<app-exps id=\"jobs\"></app-exps>\n<app-footer id=\"contact\"></app-footer>\n<app-scroll-back-button bgColorButton=\"#7985A1\"></app-scroll-back-button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/job/Job.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job/Job.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-job\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center\">\n            <h2 class=\"title\">Web & Prints Projects</h2>\n            <div class=\"app-job-title-separate\">\n                <div class=\"rings\">\n                    <span><span></span></span>\n                    <span><span></span></span>\n                    <span><span></span></span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\" *ngFor=\"let job of jobs; trackBy let i=index\">\n                <div class=\"close\" (click)=\"outDisplay(job)\" [ngClass]=\"{'close-displayed': job.stateAnim == 'displayOk'}\">\n                    <i class=\"fas fa-times\"></i>\n                </div>\n                <div class=\"app-job-content\" (click)=\"display(job)\" [@displayElement]=\"job.stateAnim\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                            <span [ngClass]=\"{'app-job-content-span': job.stateAnim == 'displayOk'}\">{{job.title}}</span>\n                            <p [ngClass]=\"{'app-job-content-p-displayed': job.stateAnim == 'displayOk'}\">{{job.description}}<br>\n                                <a *ngIf=\"job.iconGit == true\" href=\"{{job.gitLink}}\" title=\"Git-Hub\"> <i class=\"fab fa-github-square app-job-content-ico\" aria-hidden=\"true\"></i></a>\n                                <a *ngIf=\"job.viewProjet == true\" data-toggle=\"modal\" href=\"{{job.link}}\" [attr.data-target]=\"'#' + job.modalId\"><i class=\"fas fa-eye app-job-content-ico\"></i></a>  \n                            </p>\n                            \n                        </div>\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                            <img src={{job.logo}} alt=\"\" class=\"img-job app-job-img-displayed\">\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div class=\"app-job-techno\">\n                                <ng-container *ngFor=\"let arrayJob of job.imgContent;\">\n                                    <i *ngIf=\"arrayJob.classIcon\" class=\"{{arrayJob.classIcon}}\"></i>                                                                                            \n                                </ng-container>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>          \n        </div>\n        \n        <div class=\"row\">       \n            <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\" *ngFor=\"let print of prints; trackBy let i=index\">\n                <div class=\"close\" (click)=\"outDisplay2(print)\" [ngClass]=\"{'close-displayed': print.stateAnim == 'displayOk'}\">\n                    <i class=\"fas fa-times\"></i>\n                </div>\n                <div class=\"app-job-content\" (click)=\"display2(print)\" [@displayElement]=\"print.stateAnim\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                            <span [ngClass]=\"{'app-job-content-span': print.stateAnim == 'displayOk'}\">{{print.title}}</span>\n                            <p [ngClass]=\"{'app-job-content-p-displayed': print.stateAnim == 'displayOk'}\">{{print.description}}<br>\n                                <a *ngIf=\"print.viewProjet == true\" data-toggle=\"modal\" href=\"{{print.link}}\" [attr.data-target]=\"'#' + print.modalId\"><i class=\"fa fa-eye app-job-content-ico\"></i></a>  \n                            </p>\n                            \n                        </div>\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                            <img src={{print.logo}} alt=\"\" class=\"img-job app-job-img-displayed\">\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"app-job-techno\" *ngFor=\"let arrayPrint of print.imgContent;\">\n                        <i *ngIf=\"arrayPrint.classIcon1\" class=\"{{arrayPrint.classIcon}}\"></i>                                                                                            \n                    </div>\n                </div>\n            </div>          \n        </div>    \n    </div>\n    \n    <!-- Modal Write it social -->\n    \n    <div class=\"modal fade\" id=\"modalWriteItSocial\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header text-center\">\n                    <img src=\"../assets/images/logoWriteItSocial.png\" alt=\"\" width=\"33%\">\n                </div>\n                <div class=\"modal-body\">\n                    <video width=\"100%\" autoplay>\n                        <source\n                        src=\"../assets/videos/writeitsocial.webm\"\n                        type=\"video/webm\">\n                        <source\n                        src=\"../assets/videos/writeitsocial.mp4\"\n                        type=\"video/mp4\">\n                        <source\n                        src=\"../assets/videos/writeitsocial.mov\"\n                        type=\"video/mov\">\n                        Votre navigateur ne permet pas de lire les vidéos HTML5.\n                    </video>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                        <img src=\"../assets/images/mockup-write-it-social.png\" width=\"100%\" alt=\"Write it social\">\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <app-modal [arrayModal]=\"prints\"></app-modal>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modals.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modals.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let printModal of arrayModal\">\n    <div class=\"modal fade\" id=\"{{printModal.modalId}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header text-center\">\n                    <b>{{printModal.title}}</b>\n                </div>\n                <div class=\"modal-body\">\n                </div>\n                <div class=\"caroussel\" *ngIf=\"printModal.carouselActive\">\n                    <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n                        <!-- Indicators -->\n                        <ol class=\"carousel-indicators\">\n                            <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n                            <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n                            <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n                        </ol>\n\n                        <!-- Wrapper for slides -->\n                        <div class=\"carousel-inner\" role=\"listbox\">\n                            <div class=\"carousel-item active\">\n                                <img class=\"d-block img-fluid\" src=\"{{printModal.img[0]}}\" alt=\"{{printModal.title}}\">\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img class=\"d-block img-fluid\" src=\"{{printModal.img[1]}}\" alt=\"{{printModal.title}}\">\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img class=\"d-block img-fluid\" src=\"{{printModal.img[2]}}\" alt=\"{{printModal.title}}\">\n                            </div>\n                        </div>\n\n                        <!-- Controls -->\n                        <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n                            <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                        <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n                            <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"!printModal.carouselActive\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                        <img class=\"img-modal-full\" src=\"{{printModal.img[0]}}\" alt=\"{{printModal.title}}\">\n                        <img class=\"img-modal-absolute\" src=\"{{printModal.img[1]}}\" alt=\"{{printModal.title}}\">\n                        <img class=\"img-modal-absolute\" src=\"{{printModal.img[2]}}\" alt=\"{{printModal.title}}\" style=\"top:175px;\">\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\" mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n    <header class=\"mdl-layout__header app-nav-link\" >\n      <div class=\"mdl-layout__header-row\">\n        <!-- Title -->\n        <img src=\"assets/images/app-nav-logo.png\" alt=\"Logo\" width=\"50px\">\n        <span class=\"mdl-layout-title\">drien Leteinturier</span>\n        <!-- Add spacer, to align navigation to the right -->\n        <div class=\"mdl-layout-spacer\"></div>\n        <!-- Navigation. We hide it in small screens. -->\n        <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n          <a class=\"mdl-navigation__link\" (click)=\"login()\">Services</a>\n          <a class=\"mdl-navigation__link\" href=\"#projects\">Projects</a>\n          <a class=\"mdl-navigation__link\" href=\"#jobs\">Job Expériences</a>\n          <a class=\"mdl-navigation__link\" href=\"#contact\">Contact</a>\n        </nav>\n      </div>\n    </header>\n    <div class=\"mdl-layout__drawer mdl-layout--small-screen-only\">\n      <span class=\"mdl-layout-title\">Navigation</span>\n      <nav class=\"mdl-navigation\">\n          <a class=\"mdl-navigation__link\" (click)=\"login()\">Services</a>\n          <a class=\"mdl-navigation__link\" href=\"#projects\">Projects</a>\n          <a class=\"mdl-navigation__link\" href=\"#jobs\">Job Expériences</a>\n          <a class=\"mdl-navigation__link\" href=\"#contact\">Contact</a>\n      </nav>\n    </div>\n    <main class=\"mdl-layout__content\">\n      <div class=\"page-content\"></div>\n    </main>\n  </div>  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/newsApi/news-api.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newsApi/news-api.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-news-container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"text-center\">Live News by\n        <a href=\"https://newsapi.org/\">NewsApi</a>\n      </h2>\n    </div>\n  </div>\n  <div class=\"row app-news-button-src text-center\">\n    <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-2\">\n      <button (click)=\"sendNewsDataGeneral()\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\n        Générale\n      </button>\n    </div>\n    <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-2\">\n      <button (click)=\"sendNewsDataEntertainment()\"\n      class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">Divertissement\n    </button>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-2\">\n    <button (click)=\"sendNewsDataHealth()\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\n      Santé\n    </button>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-2\">\n    <button (click)=\"sendNewsDataScience()\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\n      Sciences\n    </button>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-2\">\n    <button (click)=\"sendNewsDataSports()\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\n      Sports\n    </button>\n  </div>\n  <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-2\">\n    <button (click)=\"sendNewsDataTechnology()\"\n    class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">La technologie\n  </button>\n</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-8 col-lg-8\">\n        <div class=\"app-news-img-container\">\n          <img src=\"{{imgNews == null ? noImg : imgNews}}\">\n        </div>\n        <div class=\"app-news-content-container\">\n          <span>{{contentNews}}</span>\n          <a href=\"{{authorNewsLink}}\" target=\"_blank\">\n            <cite>{{authorNews === null ? srcName : authorNews}}</cite>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 app-news-text text-center no-padding-left\">\n        <div class=\"app-news-text-container\" *ngFor=\"let dataNew of dataNews; let i=index\" [ngClass]=\"{active: isSelectedItem(dataNew, dataNew.id) }\" (click)=\"selectedSrcData(i); selectedStyle(dataNew)\"\n        (mouseleave)=\"imgClass = false\">\n        <h3 [ngClass]=\"{active: isSelectedItem(dataNew, dataNew.id) }\">{{dataNew.title}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/office.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/office.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n  <header class=\"mdl-layout__header app-nav-link\">\n    <div class=\"mdl-layout__header-row\">\n      <img class=\"app-office-img-profil\" [src]=\"photoUrl\" alt=\"Image profil : {{pseudo}}\">\n      <span class=\"mdl-layout-title\">\n        <span>Bienvenue</span>\n        <span>{{pseudo}}</span>\n      </span>\n      <div class=\"mdl-layout-spacer\"></div>\n      <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n        <a class=\"mdl-navigation__link cursor-pointer\" (click)=\"logout()\">Se déconnecter</a>\n      </nav>\n    </div>\n  </header>\n  <div class=\"mdl-layout__drawer mdl-layout--small-screen-only\">\n    <span class=\"mdl-layout-title\">Navigation</span>\n    <nav class=\"mdl-navigation\">\n      <a class=\"mdl-navigation__link cursor-pointer\" (click)=\"logout()\">Se déconnecter</a>\n    </nav>\n  </div>\n  <main class=\"mdl-layout__content\">\n    <div class=\"page-content\">\n      <app-element-forms></app-element-forms>\n      <app-news-api></app-news-api>\n    </div>\n  </main>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/presentation.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/presentation.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-pres\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 row-no-padding\">\n            <div class=\"app-pres-logo mdl-card mdl-shadow--2dp text-center\">\n                <div>\n                    <h2 class=\"ml3\">\n                        <span class=\"animated fadeInLeftBig\">Développeur</span>\n                        <span> /</span>\n                        <span class=\"animated rotateInDownRight\">Web Designer</span>\n                    </h2>\n                </div>\n                <div class=\"mdl-card__supporting-text\">\n                </div>\n                <div class=\"row app-pres-socials\">\n                    <div class=\"col-xs-4 col-12\">\n                        \n                        <a *ngFor=\"let social of socials\" href=\"{{social.link}}\" title=\"{{social.title}}\">\n                            <i class=\"{{social.classIco}}\" aria-hidden=\"true\"></i>\n                        </a>\n                        \n                    </div>\n                </div>\n                <div class=\"mdl-card__actions mdl-card--border\">\n                    <a href=\"#skills\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n                        Get Started\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--\n        <div class=\"row\">\n            <div class=\"col-lg-2 text-center\">\n                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n                <path id=\"circle_yellow\" style=\"fill:#E4BA42;\" transform=\"translate(-800,0)\" d=\"M512,256c0,33.353-6.374,65.212-17.983,94.438c-6.207,15.632-13.908,30.511-22.936,44.45\n                c-11.243,17.387-24.545,33.322-39.549,47.449c-8.788,8.286-18.15,15.945-28.035,22.925C361.806,494.707,310.93,512,256,512\n                s-105.806-17.293-147.498-46.738c-12.372-8.735-23.928-18.526-34.534-29.268C28.233,389.757,0,326.165,0,256\n                S28.233,122.243,73.968,76.006c11.233-11.368,23.531-21.682,36.728-30.793C151.97,16.697,202.031,0,256,0\n                s104.03,16.697,145.304,45.213c10.083,6.949,19.634,14.618,28.588,22.925c15.684,14.503,29.539,30.96,41.19,48.974\n                c9.028,13.939,16.729,28.818,22.936,44.45C505.626,190.788,512,222.647,512,256z\" />\n                <g id=\"cube\" transform=\"translate(800,0)\" transform=\"rotate(8)\" style=\"opacity: 0;\">\n                    <path d=\"M391.05,232.97c-7.125-20.664-36.341-20.664-42.04-3.563c-5.7,17.101,13.539,27.076,43.466,37.053\n                    c29.927,9.976,48.454,36.341,44.891,59.854s-13.539,54.154-72.68,54.154c-36.963,0-57.505-23.103-67.714-40.429l33.511-20.138\n                    c0,0,11.401,24.227,32.777,24.227c21.377,0,29.927-7.125,29.927-23.514c0-19.951-69.118-27.076-79.806-61.279\n                    s3.563-82.656,53.441-79.094c31.175,2.227,48.71,17.535,57.478,28.703L391.05,232.97z\" />\n                    <path d=\"M235.714,183.805c0,0,0,120.421,0,136.81c0,16.388-14.251,24.94-28.502,22.089\n                    c-14.251-2.85-20.664-19.951-20.664-19.951l-32.777,22.089c0,0,7.125,32.777,52.016,35.628\n                    c44.891,2.85,70.542-24.227,70.542-47.029s0-149.636,0-149.636L235.714,183.805L235.714,183.805z\" />\n                    <path d=\"M73.968,45.213v390.781c10.606,10.742,22.162,20.532,34.534,29.268h294.996\n                    c9.885-6.98,19.247-14.639,28.035-22.925H96.893V68.138h374.188v326.75c9.028-13.939,16.729-28.818,22.936-44.45V45.213H73.968z\"\n                    />\n                </g>\n                <circle id=\"small_circle\" transform=\"translate(800,0)\" cx=\"87.855\" cy=\"339.143\" r=\"40.615\" />\n            </svg>\n        </div>\n        <div class=\"col-lg-2\">\n            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            width=\"376.119px\" height=\"363.433px\" viewBox=\"0 0 376.119 363.433\" enable-background=\"new 0 0 376.119 363.433\"\n            xml:space=\"preserve\">\n            <polygon id=\"polygon\" fill=\"none\" stroke=\"#DC2026\" transform=\"scale(0.1)\" style=\"opacity:0;\" stroke-width=\"7\" stroke-miterlimit=\"10\"\n            points=\"187.55,12.905 28.642,68.828 \n            53.752,277.022 187.719,350.654 322.375,276.028 347.478,67.838 \" />\n            <path id=\"text_left\" transform=\"translate(-300,0)\" fill=\"#DC2026\" d=\"M226.94,191.621l-39.762,18.594h-41.907l-19.7,49.271l-36.643,0.68l98.25-218.571L226.94,191.621z\n            M223.097,182.259l-35.654-70.583l-29.247,69.37h28.98L223.097,182.259z\" />\n            <polygon id=\"text_right\" transform=\"translate(300,0)\" fill=\"#DC2026\" points=\"187.176,41.595 187.439,111.676 220.625,181.1 187.251,181.1 187.176,210.169 233.325,210.214 \n            254.894,260.173 289.953,260.822 \" />\n        </svg>\n    </div>\n    <div class=\"col-lg-2\">\n        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n        <path style=\"fill:#F2F2F2;\" d=\"M512,256c0,7.91-0.355,15.726-1.066,23.448c-0.543,6.113-1.317,12.152-2.299,18.119\n        C488.782,419.182,383.227,512,256,512c-64.805,0-123.977-24.074-169.075-63.781c-16.666-14.66-31.41-31.462-43.802-49.977\n        C15.882,357.564,0,308.632,0,256C0,114.615,114.615,0,256,0S512,114.615,512,256z\" />\n        <path id=\"text_sass\" style=\"fill:#CD6699;\" d=\"M446.767,284.975c-7.764,2.936-7.45,2.988-11.557-4.493c-5.245-9.529-8.035-19.55-8.276-30.448\n        c-0.199-9.352,2.361-18.045,5.58-26.572c2.57-6.781-0.773-9.174-6.646-9.791c-4.274-0.439-8.683-0.397-12.967,0.042\n        c-11.139,1.139-12.236,2.1-15.193,12.915c-1.755,6.416-3.156,12.884-6.071,18.975c-7.189,14.994-15.36,29.435-23.74,43.771\n        c-1.505,2.581-2.748,5.36-4.869,7.565c-6.071-9.091-8.359-19.132-8.871-29.665c-0.512-10.397,2.675-20.062,6.175-29.623\n        c1.181-3.218,0.199-5.214-2.581-6.604c-1.233-0.616-2.612-1.191-3.96-1.296c-7.147-0.564-14.273-0.481-21.243,1.473\n        c-3.135,0.867-5.183,2.623-5.883,6.144c-1.358,6.886-3.479,13.573-6.343,20.01c-7.941,17.826-15.83,35.683-23.761,53.52\n        c-6.896,15.496-13.688,31.033-21.859,45.913c-0.575,1.055-1.055,2.884-2.497,2.518c-1.463-0.366-0.951-2.163-1.014-3.396\n        c-0.47-8.777,1.923-17.147,3.96-25.527c3.229-13.26,6.76-26.457,10.188-39.675c0.982-3.793-0.669-6.343-3.814-8.161\n        c-4.524-2.602-9.028-2.727-13.928,0.919c0.669-5.392,0.961-10.125,0.731-14.858c-0.522-10.553-5.413-17.418-13.928-19.007\n        c-6.217-1.16-12.1,0.648-17.659,3.281c-12.957,6.134-23.374,15.381-32.131,26.603c-1.024,1.306-2.058,2.508-3.542,3.312\n        c-16.436,8.955-32.862,17.91-49.256,26.948c-1.797,1.003-2.957,0.721-4.253-0.669c-8.255-8.85-17.836-16.154-27.324-23.562\n        c-13.26-10.365-26.979-20.187-38.421-32.684c-6.687-7.314-12.267-15.329-15.057-25.004c-4.556-15.82-1.149-30.553,6.437-44.554\n        c8.976-16.562,22.288-29.351,36.968-40.741c23.312-18.077,48.88-32.434,75.828-44.251c30.177-13.218,61.482-21.734,94.824-20.449\n        c13.208,0.512,26.028,2.8,37.794,9.268c8.328,4.577,13.845,11.191,15.402,20.898c1.829,11.368-0.899,21.87-5.945,31.828\n        c-11.274,22.246-29.194,38.003-50.375,50.343c-17.638,10.271-36.665,16.792-56.801,20.208c-11.128,1.891-22.298,3.03-33.489,1.327\n        c-12.842-1.954-24.712-6.248-33.499-16.593c-1.014-1.191-2.299-2.017-4.023-1.181c-1.766,0.857-1.63,2.424-1.463,3.929\n        c0.125,1.034,0.408,2.079,0.773,3.062c2.351,6.343,6.75,11.128,11.901,15.308c13.396,10.898,29.268,14.096,45.934,14.42\n        c16.311,0.324,32.371-1.745,48.264-5.548c35.85-8.568,65.881-26.154,87.803-56.289c13.103-18.014,21.4-37.867,20.668-60.583\n        c-0.47-14.409-5.319-27.136-15.82-37.48c-12.487-12.278-27.982-18.453-44.607-22.162c-18.516-4.117-37.219-4.702-56.111-2.445\n        c-16.436,1.964-32.496,5.329-48.128,10.71c-23.918,8.244-47.02,18.369-69.13,30.678c-22.653,12.601-44.001,27.032-62.725,45.108\n        c-16.572,15.997-30.814,33.646-38.839,55.557c-3.427,9.383-5.893,19.028-3.594,29.174c2.947,13.061,9.383,24.367,17.847,34.565\n        c12.8,15.444,28.505,27.606,44.701,39.225c13.009,9.341,26.624,17.847,39.121,27.888c3.542,2.842,3.521,2.842-0.648,5.026\n        c-4.869,2.539-9.791,4.984-14.576,7.69C91.951,342.695,73.3,354.523,58.075,370.96c-7.492,8.098-12.581,17.189-14.952,27.282\n        c12.392,18.516,27.136,35.318,43.802,49.977c28.432-2.215,50.197-17.011,66.278-41.482c7.764-11.818,11.4-25.192,12.769-39.299\n        c1.202-12.434-0.063-24.472-3.72-36.342c-0.637-2.09-3.009-4.169-2.079-6.008c0.867-1.693,3.48-2.55,5.402-3.657\n        c7.753-4.504,15.527-8.944,23.51-13.531c0.345,1.714-0.324,2.717-0.616,3.803c-4.577,16.792-7.764,33.719-4.284,51.169\n        c2.163,10.867,5.768,21.096,12.622,30.093c7.053,9.258,22.8,8.202,29.194-0.251c6.071-8.025,10.094-17.074,14.284-26.081\n        c2.299-4.932,4.409-9.947,6.604-14.932c-0.408,5.998-0.387,11.849-0.167,17.68c0.219,5.747,1.139,11.421,4.127,16.499\n        c3.594,6.102,10.355,7.879,16.635,4.618c6.625-3.438,11.139-9.101,14.649-15.245c15.057-26.425,29.027-53.415,40.594-81.596\n        c2.466-5.987,4.995-11.964,7.785-18.62c0.428,2.184,0.711,3.521,0.972,4.859c2.57,13.427,7.147,26.133,13.772,38.076\n        c1.421,2.56,1.264,4.326-0.533,6.781c-6.102,8.307-12.79,16.123-19.383,24.022c-5.538,6.646-11.463,12.999-16.144,20.313\n        c-4.2,6.583-1.787,13.322,5.204,14.817c2.152,0.46,4.42,0.596,6.625,0.564c12.215-0.146,23.489-3.793,33.991-9.77\n        c14.137-8.056,22.518-19.864,22.131-36.676c-0.178-7.649-2.247-14.994-5.329-22.006c-0.679-1.557-0.711-2.685,0.303-4.148\n        c9.791-14.023,18.442-28.724,26.394-43.854c1.411-2.664,2.403-5.622,4.681-8.223c0.303,1.055,0.543,1.714,0.679,2.393\n        c2.529,12.539,5.935,24.795,12.33,35.986c1.755,3.062,0.878,4.618-1.546,6.666c-8.349,7.095-15.391,15.37-20.919,24.848\n        c-4.305,7.377-7.252,15.255-7.22,23.897c0.031,9.613,7.387,15.276,16.76,13.019c9.77-2.341,18.829-6.322,26.958-12.267\n        c17.711-12.967,22.904-26.645,17.356-45.735c-2.173-7.513-2.132-7.387,5.402-9.665c16.478-4.974,33.196-5.183,49.998-2.445\n        c1.902,0.313,3.783,0.669,5.642,1.076c0.982-5.966,1.755-12.006,2.299-18.119C489.441,274.192,467.978,276.919,446.767,284.975z\n        M98.586,419.401c-4.775,1.693-9.738,2.414-14.817,2.017c-6.322-0.502-10.334-4.963-10.742-11.672\n        c-0.46-7.732,1.829-14.712,5.214-21.504c6.154-12.33,16.488-20.699,27.032-28.912c10.25-7.993,21.264-14.817,32.402-21.452\n        c3.375-2.006,3.427-1.985,4.2,2.038c1.003,5.162,1.902,10.334,1.567,15.026C144.321,383.08,123.883,410.446,98.586,419.401z\n        M251.956,277.514c-1.776,11.86-5.653,23.155-9.78,34.314c-5.622,15.235-11.097,30.542-18.171,45.192\n        c-1.62,3.375-3.323,6.729-5.945,9.477c-2.476,2.602-4.671,2.299-6.384-0.878c-3.344-6.207-2.926-13.113-3.469-18.129\n        c0.157-25.161,8.6-45.725,22.507-64.209c3.887-5.151,8.85-9.341,15.423-11.024C250.598,271.12,252.656,272.917,251.956,277.514z\n        M349.341,352.005c-4.765,8.234-11.63,14.221-20.052,18.484c-0.899,0.449-2.058,1.243-2.873,0.188\n        c-0.773-0.993,0.47-1.651,1.034-2.278c8.37-9.143,16.635-18.359,24.085-28.275c0.115-0.157,0.397-0.178,1.034-0.449\n        C352.496,344.263,351.493,348.296,349.341,352.005z M407.134,351.65c-1.243,0.585-2.685,1.682-3.897,0.742\n        c-1.337-1.034-0.805-2.863-0.397-4.263c1.902-6.384,4.462-12.497,7.993-18.192c2.967-4.796,6.646-8.986,10.689-12.894\n        c1.63-1.567,2.361-1.379,2.915,0.878c0.575,2.309,0.627,4.618,0.669,6.969C425.002,337.753,418.471,346.311,407.134,351.65z\"\n        />\n    </svg>\n</div>\n<div>Icons made by\n    <a href=\"http://www.freepik.com\" title=\"Freepik\">Freepik</a> from\n    <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a> is licensed by\n    <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a>\n</div>\n</div>\n-->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-back-button/scroll-back-button.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-back-button/scroll-back-button.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href=\"#home\">\n<button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored app-scroll-back-button\">\n    <i class=\"fas fa-arrow-circle-up\"></i>\n  </button>\n</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-skills\">\n    <div class=\"row\">\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n            <div class=\"app-skills-item-container\">\n                <div class=\"app-skills-item text-center\">\n                    <img src=\"assets/images/app-skills-responsive-img.png\" alt=\"\">\n                    <span>Responsive design</span>                    \n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n            <div class=\"app-skills-item-container\">\n                <div class=\"app-skills-item text-center\">\n                    <img src=\"assets/images/app-skills-reseaux-img.png\" alt=\"\">\n                    <span>Stratégie sur les réseaux sociaux</span>                    \n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n            <div class=\"app-skills-item-container\">\n                <div class=\"app-skills-item text-center\">\n                    <img src=\"assets/images/app-skills-identity-img.png\" alt=\"\">\n                    <span>Identité visuelle</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\n            <div class=\"app-skills-item-container\">\n                <div class=\"app-skills-item text-center\">\n                    <img src=\"assets/images/app-skills-dev-img.png\" alt=\"\">\n                    <span>Développement Web et Wordpress</span>                    \n                </div>\n            </div>\n        </div>                        \n    </div>\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.input{\n    margin-bottom: 500px;\n}\n\n.saveable{\n    background: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5wdXR7XG4gICAgbWFyZ2luLWJvdHRvbTogNTAwcHg7XG59XG5cbi5zYXZlYWJsZXtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, afAuth, router, _ActivatedRoute, location) {
        var _this = this;
        this.authService = authService;
        this.afAuth = afAuth;
        this.router = router;
        this._ActivatedRoute = _ActivatedRoute;
        this.location = location;
        this.user = this.authService.afAuth.authState;
        this.user.subscribe(function (auth) {
            if (auth) {
                _this.isLogged = true;
                _this.pseudo = auth.displayName;
                _this.email = auth.email;
                _this.router.navigate(['login']);
            }
            else {
                _this.isLogged = false;
                _this.pseudo = '';
                _this.email = '';
                _this.router.navigate(['home']);
            }
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _office_office_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./office/office.component */ "./src/app/office/office.component.ts");
/* harmony import */ var _nav_nav_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.module */ "./src/app/nav/nav.module.ts");
/* harmony import */ var _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./presentation/presentation.module */ "./src/app/presentation/presentation.module.ts");
/* harmony import */ var _skills_skills_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills.module */ "./src/app/skills/skills.module.ts");
/* harmony import */ var _job_job_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job/job.module */ "./src/app/job/job.module.ts");
/* harmony import */ var _exps_exps_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exps/exps.module */ "./src/app/exps/exps.module.ts");
/* harmony import */ var _element_forms_element_forms_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./element-forms/element-forms.module */ "./src/app/element-forms/element-forms.module.ts");
/* harmony import */ var _element_forms_element_forms_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./element-forms/element-forms.service */ "./src/app/element-forms/element-forms.service.ts");
/* harmony import */ var _office_office_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./office/office.module */ "./src/app/office/office.module.ts");
/* harmony import */ var _presentation_presentation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./presentation/presentation.service */ "./src/app/presentation/presentation.service.ts");
/* harmony import */ var _windowElement_window_element_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./windowElement/window-element.service */ "./src/app/windowElement/window-element.service.ts");
/* harmony import */ var _blotterService_blotter_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blotterService/blotter.service */ "./src/app/blotterService/blotter.service.ts");
/* harmony import */ var _quotesService_quotes_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quotesService/quotes.service */ "./src/app/quotesService/quotes.service.ts");
/* harmony import */ var _newsApi_news_api_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./newsApi/news-api.service */ "./src/app/newsApi/news-api.service.ts");
/* harmony import */ var _inputValids_input_valids_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./inputValids/input-valids.directive */ "./src/app/inputValids/input-valids.directive.ts");
/* harmony import */ var _exponentielle_strength_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./exponentielle-strength.pipe */ "./src/app/exponentielle-strength.pipe.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_fire_database_deprecated__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/database-deprecated */ "./node_modules/@angular/fire/__ivy_ngcc__/database-deprecated/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/index.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





























var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"] },
    { path: 'login', component: _office_office_component__WEBPACK_IMPORTED_MODULE_6__["OfficeComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _inputValids_input_valids_directive__WEBPACK_IMPORTED_MODULE_20__["InputValidsDirective"],
                _exponentielle_strength_pipe__WEBPACK_IMPORTED_MODULE_21__["ExponentialStrengthPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_28__["homeModule"],
                _office_office_module__WEBPACK_IMPORTED_MODULE_14__["officeModule"],
                _nav_nav_module__WEBPACK_IMPORTED_MODULE_7__["NavModule"],
                _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_8__["PresModule"],
                _skills_skills_module__WEBPACK_IMPORTED_MODULE_9__["SkillsModule"],
                _job_job_module__WEBPACK_IMPORTED_MODULE_10__["JobModule"],
                _exps_exps_module__WEBPACK_IMPORTED_MODULE_11__["ExpsModule"],
                _element_forms_element_forms_module__WEBPACK_IMPORTED_MODULE_12__["ElementFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_22__["environment"].firebase),
                _angular_fire_database_deprecated__WEBPACK_IMPORTED_MODULE_26__["AngularFireDatabaseModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_25__["AngularFireModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_27__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [
                _providers_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"],
                _element_forms_element_forms_service__WEBPACK_IMPORTED_MODULE_13__["ElementFormsService"],
                _presentation_presentation_service__WEBPACK_IMPORTED_MODULE_15__["PresentationService"],
                _windowElement_window_element_service__WEBPACK_IMPORTED_MODULE_16__["WindowElementService"],
                _blotterService_blotter_service__WEBPACK_IMPORTED_MODULE_17__["BlotterService"],
                _quotesService_quotes_service__WEBPACK_IMPORTED_MODULE_18__["QuotesService"],
                _newsApi_news_api_service__WEBPACK_IMPORTED_MODULE_19__["NewsApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blotterService/blotter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/blotterService/blotter.service.ts ***!
  \***************************************************/
/*! exports provided: BlotterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlotterService", function() { return BlotterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BlotterService = /** @class */ (function () {
    function BlotterService() {
        this.mainBlotterSliding = function (content, font, fontSize, fontColor, divisions, speed, direction) {
            var text = new Blotter.Text(content, {
                family: font,
                size: fontSize,
                fill: fontColor
            });
            var material = new Blotter.SlidingDoorMaterial();
            // setting numbers of text that separates the text
            // it is interger variable between 0.0 ~ any number
            material.uniforms.uDivisions.value = divisions;
            // setting speed for text movement
            // it is a float variable between 0.0 ~ 1.0
            material.uniforms.uSpeed.value = speed;
            // the text that appears will move from left to right or vice versa
            // is a boolean variable, filled with false or true
            material.uniforms.uAnimateHorizontal.value = direction;
            var blotter = new Blotter(material, { texts: text });
            var scope = blotter.forText(text);
            var container = document.getElementById('blotter');
            scope.appendTo(container);
        };
        this.mainBlotterSplit = function (content, font, fontSize, fontColor) {
            var text = new Blotter.Text(content, {
                family: font,
                size: fontSize,
                fill: fontColor
            });
            // here we will determine what material will be used
            var material = new Blotter.ChannelSplitMaterial();
            // add a supporting element for creating animations
            // here we add blur effect to the text
            material.uniforms.uApplyBlur.value = true;
            var blotter = new Blotter(material, { texts: text });
            var scope = blotter.forText(text);
            var container = document.getElementById('blotter');
            scope.appendTo(container);
        };
    }
    BlotterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BlotterService);
    return BlotterService;
}());



/***/ }),

/***/ "./src/app/config/error_inputs.ts":
/*!****************************************!*\
  !*** ./src/app/config/error_inputs.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var account_validation_messages = {
    'email': [
        { type: 'required', message: 'Votre email est obligatoire' },
        { type: 'pattern', message: 'Entrer un Email valide' }
    ],
    'username': [
        { type: 'required', message: 'Votre nom est obligatoire' },
        { type: 'minlength', message: 'Votre nom doit etre composé d\'un minimum de 5 caractères' },
        { type: 'maxlength', message: 'Votre nom ne doit pas depasser 25 caractères' },
        { type: 'pattern', message: 'Votre nom doit être composé de lettres et de chiffres' }
    ],
    'message': [
        { type: 'minlength', message: 'Votre messsage doit être composé d\'un minimum de 5 caractères' }
    ]
};
/* harmony default export */ __webpack_exports__["default"] = (account_validation_messages);


/***/ }),

/***/ "./src/app/config/labels.ts":
/*!**********************************!*\
  !*** ./src/app/config/labels.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var labels = {
    'input': [
        {
            'email': 'Votre e-mail',
            'username': 'Votre pseudo / nom',
            'message': 'Votre message'
        }
    ]
};
/* harmony default export */ __webpack_exports__["default"] = (labels);


/***/ }),

/***/ "./src/app/element-forms/element-forms.component.css":
/*!***********************************************************!*\
  !*** ./src/app/element-forms/element-forms.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-element-forms-container{\n    background-color: white;\n    margin-top: 56px;\n}\n\n.app-element-forms-container .fa-compass{\n    font-size: 44px;\n    color: #7985A1;\n}\n\n.mdl-textfield__label{\n    color: white;\n}\n\n.app-element-forms-weather-container{\n    background-color: #7985A1;\n    padding: 20px;\n}\n\n.app-element-forms-weather-container div:first-child{\n    margin-top: 20px;\n}\n\n.app-element-forms-weather-container span{\n    font-family: 'Righteous', cursive;\n    color: white;\n    font-size: 28px;\n}\n\n.app-element-forms-weather-container i{\n    font-size: 145px;\n    color: white \n}\n\n@media screen and (max-width: 767px) {\n    .temperate-container{\n        border: none !important;   \n    }\n    .app-element-forms-weather-container{\n        margin-top: 10px;\n    }\n}\n\n.temperate-container{\n    font-size: 90px;\n    border-left: 2px solid white;   \n}\n\n.temperate-container p{\n\n    font-size: 16px;\n    color: white;\n    margin-top: 15px;\n    text-align: center;\n}\n\nform button{\n    margin-left: 10px;\n}\n\n.input-city-container{\n    width: 267px !important;\n}\n\n.weather-title{\n    margin-top: 50px;\n    color: #7985A1;\n    font-size: 50px;\n    text-align: center;\n    font-style: italic;\n    font-weight: bold;\n    text-shadow: \n        1px 1px 1px #d3d3d3,\n        1px 2px 1px #d3d3d3,\n        1px 3px 1px #d3d3d3,\n        1px 4px 1px #d3d3d3,\n        1px 5px 1px #d3d3d3,\n        1px 6px 1px #d3d3d3,\n        1px 7px 1px #d3d3d3,\n        0 1px 1px rgba(68,68,68,.3),\n        0 5px 3px rgba(68,68,68,.2),\n        0 10px 4px rgba(68,68,68,.2),\n        0 15px 8px rgba(68,68,68,.2),\n        0 30px 10px rgba(68,68,68,.1);\n}\n\n.weather-error-msg{\n    color: red;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudC1mb3Jtcy9lbGVtZW50LWZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFHQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakI7Ozs7Ozs7Ozs7OztxQ0FZaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50LWZvcm1zL2VsZW1lbnQtZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtZWxlbWVudC1mb3Jtcy1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbn1cblxuLmFwcC1lbGVtZW50LWZvcm1zLWNvbnRhaW5lciAuZmEtY29tcGFzc3tcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgY29sb3I6ICM3OTg1QTE7XG59XG5cbi5tZGwtdGV4dGZpZWxkX19sYWJlbHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hcHAtZWxlbWVudC1mb3Jtcy13ZWF0aGVyLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4NUExO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hcHAtZWxlbWVudC1mb3Jtcy13ZWF0aGVyLWNvbnRhaW5lciBkaXY6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmFwcC1lbGVtZW50LWZvcm1zLXdlYXRoZXItY29udGFpbmVyIHNwYW57XG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5hcHAtZWxlbWVudC1mb3Jtcy13ZWF0aGVyLWNvbnRhaW5lciBpe1xuICAgIGZvbnQtc2l6ZTogMTQ1cHg7XG4gICAgY29sb3I6IHdoaXRlIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC50ZW1wZXJhdGUtY29udGFpbmVye1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgICBcbiAgICB9XG4gICAgLmFwcC1lbGVtZW50LWZvcm1zLXdlYXRoZXItY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuXG4udGVtcGVyYXRlLWNvbnRhaW5lcntcbiAgICBmb250LXNpemU6IDkwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTsgICBcbn1cblxuLnRlbXBlcmF0ZS1jb250YWluZXIgcHtcblxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuZm9ybSBidXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5pbnB1dC1jaXR5LWNvbnRhaW5lcntcbiAgICB3aWR0aDogMjY3cHggIWltcG9ydGFudDtcbn1cblxuLndlYXRoZXItdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBjb2xvcjogIzc5ODVBMTtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogXG4gICAgICAgIDFweCAxcHggMXB4ICNkM2QzZDMsXG4gICAgICAgIDFweCAycHggMXB4ICNkM2QzZDMsXG4gICAgICAgIDFweCAzcHggMXB4ICNkM2QzZDMsXG4gICAgICAgIDFweCA0cHggMXB4ICNkM2QzZDMsXG4gICAgICAgIDFweCA1cHggMXB4ICNkM2QzZDMsXG4gICAgICAgIDFweCA2cHggMXB4ICNkM2QzZDMsXG4gICAgICAgIDFweCA3cHggMXB4ICNkM2QzZDMsXG4gICAgICAgIDAgMXB4IDFweCByZ2JhKDY4LDY4LDY4LC4zKSxcbiAgICAgICAgMCA1cHggM3B4IHJnYmEoNjgsNjgsNjgsLjIpLFxuICAgICAgICAwIDEwcHggNHB4IHJnYmEoNjgsNjgsNjgsLjIpLFxuICAgICAgICAwIDE1cHggOHB4IHJnYmEoNjgsNjgsNjgsLjIpLFxuICAgICAgICAwIDMwcHggMTBweCByZ2JhKDY4LDY4LDY4LC4xKTtcbn1cblxuLndlYXRoZXItZXJyb3ItbXNne1xuICAgIGNvbG9yOiByZWQ7XG59XG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/element-forms/element-forms.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/element-forms/element-forms.component.ts ***!
  \**********************************************************/
/*! exports provided: ElementFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementFormsComponent", function() { return ElementFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _element_forms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-forms.service */ "./src/app/element-forms/element-forms.service.ts");
/* harmony import */ var _weatherApi_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weatherApi/weather.service */ "./src/app/weatherApi/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ElementFormsComponent = /** @class */ (function () {
    function ElementFormsComponent(_ElementFormsService, _WeatherService) {
        this._ElementFormsService = _ElementFormsService;
        this._WeatherService = _WeatherService;
        this.dataWeather = [];
        this.messageError = false;
        this.defaultPosition = "France";
    }
    ElementFormsComponent.prototype.ngOnInit = function () {
        this.getLocation();
    };
    ElementFormsComponent.prototype.sendPositionInputs = function (form) {
        var _this = this;
        console.log(form.value.msgSubject);
        this._WeatherService.getWeatherCurrent(form.value.msgSubject)
            .subscribe(function (res) {
            _this.addValueResponseWeatherService(res);
            _this.dataWeather = [];
        }, function (err) {
            _this.messageError = true;
            console.log(err + 'erreur ');
        });
    };
    ;
    ElementFormsComponent.prototype.postionByDefault = function () {
        var _this = this;
        this._WeatherService.getWeatherCurrent("France")
            .subscribe(function (res) {
            _this.addValueResponseWeatherService(res);
            _this.dataWeather = [];
        }, function (err) {
            _this.messageError = true;
            console.log(err + 'erreur ');
        });
    };
    ElementFormsComponent.prototype.getLocation = function () {
        if (navigator.geolocation) {
            var self = this;
            navigator.geolocation.getCurrentPosition(function (position) {
                self._WeatherService.getYourPosition(position.coords.latitude, position.coords.longitude)
                    .subscribe(function (res) {
                    self.dataWeather = res;
                    self.dataWeatherName = res.name;
                    self.iconUrl = res.weather[0].icon;
                    self.maxTemp = res.main.temp_max;
                    self.minTemp = res.main.temp_min;
                    self.humidity = res.main.humidity;
                    self.wind = res.wind.speed;
                    self.dataWeather = [];
                }, function (err) { return console.error(err + 'Error'); });
            });
        }
    };
    ;
    ElementFormsComponent.prototype.addValueResponseWeatherService = function (res) {
        this.dataWeather = res;
        this.dataWeatherName = res.name;
        this.iconUrl = res.weather[0].icon;
        this.maxTemp = res.main.temp_max;
        this.minTemp = res.main.temp_min;
        this.humidity = res.main.humidity;
        this.wind = res.wind.speed;
        this.messageError = false;
    };
    ElementFormsComponent.ctorParameters = function () { return [
        { type: _element_forms_service__WEBPACK_IMPORTED_MODULE_1__["ElementFormsService"] },
        { type: _weatherApi_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
    ]; };
    ElementFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-element-forms',
            template: __importDefault(__webpack_require__(/*! raw-loader!./element-forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/element-forms/element-forms.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./element-forms.component.css */ "./src/app/element-forms/element-forms.component.css")).default]
        }),
        __metadata("design:paramtypes", [_element_forms_service__WEBPACK_IMPORTED_MODULE_1__["ElementFormsService"], _weatherApi_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
    ], ElementFormsComponent);
    return ElementFormsComponent;
}());

;


/***/ }),

/***/ "./src/app/element-forms/element-forms.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/element-forms/element-forms.module.ts ***!
  \*******************************************************/
/*! exports provided: ElementFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementFormsModule", function() { return ElementFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _weatherApi_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weatherApi/weather.service */ "./src/app/weatherApi/weather.service.ts");
/* harmony import */ var _element_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element-forms.component */ "./src/app/element-forms/element-forms.component.ts");
/* harmony import */ var _element_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element-forms.service */ "./src/app/element-forms/element-forms.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ElementFormsModule = /** @class */ (function () {
    function ElementFormsModule() {
    }
    ElementFormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_element_forms_component__WEBPACK_IMPORTED_MODULE_4__["ElementFormsComponent"]],
            exports: [_element_forms_component__WEBPACK_IMPORTED_MODULE_4__["ElementFormsComponent"]],
            providers: [_element_forms_service__WEBPACK_IMPORTED_MODULE_5__["ElementFormsService"], _weatherApi_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]]
        })
    ], ElementFormsModule);
    return ElementFormsModule;
}());



/***/ }),

/***/ "./src/app/element-forms/element-forms.service.ts":
/*!********************************************************!*\
  !*** ./src/app/element-forms/element-forms.service.ts ***!
  \********************************************************/
/*! exports provided: ElementFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementFormsService", function() { return ElementFormsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ElementFormsService = /** @class */ (function () {
    function ElementFormsService(_http) {
        this._http = _http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.postUrl = 'https://adrienleteinturier.herokuapp.com/action';
    }
    ElementFormsService.prototype.postContactForm = function (contactFormValue) {
        console.log('​ElementFormsService -> postContactForm -> contactFormValue', contactFormValue);
        this._http.post(this.postUrl, contactFormValue)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) { return console.log(err, 'Erreur postContactForm)'); });
    };
    ElementFormsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ElementFormsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ElementFormsService);
    return ElementFormsService;
}());



/***/ }),

/***/ "./src/app/exponentielle-strength.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/exponentielle-strength.pipe.ts ***!
  \************************************************/
/*! exports provided: ExponentialStrengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExponentialStrengthPipe", function() { return ExponentialStrengthPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var ExponentialStrengthPipe = /** @class */ (function () {
    function ExponentialStrengthPipe() {
    }
    ExponentialStrengthPipe.prototype.transform = function (value, exponent) {
        var exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    };
    ExponentialStrengthPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'exponentialStrength' })
    ], ExponentialStrengthPipe);
    return ExponentialStrengthPipe;
}());



/***/ }),

/***/ "./src/app/exps/exps.component.css":
/*!*****************************************!*\
  !*** ./src/app/exps/exps.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-exps{\n    margin: 200px 10px 200px 10px; \n}\n\n.app-exps-container{\n    background-color: white;\n    margin-top: 50px;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.app-exps-img-pastille{\n    background-color: #7985A1;\n    padding: 15px;\n    border-radius: 40px;\n}\n\n.app-exps-title-separate{\n    margin: 20px 0px 0px 15px;\n    float: left;\n}\n\n.hr-custom-title{\n    background-color: white;\n    height: 3px;\n    width: 270px;\n    margin-top: 13px;\n}\n\n.app-exps-container-logo-exps div{\n    display: inline-block;\n    margin: 20px 5px 5px 5px;\n}\n\n.app-exps-container-logo-exps p{\n    color:#c9c9c9;\n    font-weight: 600;\n    font-size: 18px;\n    margin-top: 10px;\n}\n\n.app-exps-container-logo-exps p:last-child{\n    font-size: 14px;\n    color: #7985A1;\n}\n\n.title{\n    float: left;\n    color: white;\n    margin-left: 5px;\n}\n\n@media screen and (max-width: 640px) {\n    .app-exps-container-logo-exps p{\n        font-size: 12px;\n    }\n    .app-exps-container-logo-exps p:last-child{\n        font-size: 12px;\n    }\n    .app-exps-title-separate h2{\n        font-size: 15px;\n    }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwcy9leHBzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwcy9leHBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWV4cHN7XG4gICAgbWFyZ2luOiAyMDBweCAxMHB4IDIwMHB4IDEwcHg7IFxufVxuXG4uYXBwLWV4cHMtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmFwcC1leHBzLWltZy1wYXN0aWxsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4NUExO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLmFwcC1leHBzLXRpdGxlLXNlcGFyYXRle1xuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5oci1jdXN0b20tdGl0bGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG59XG5cbi5hcHAtZXhwcy1jb250YWluZXItbG9nby1leHBzIGRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAyMHB4IDVweCA1cHggNXB4O1xufVxuLmFwcC1leHBzLWNvbnRhaW5lci1sb2dvLWV4cHMgcHtcbiAgICBjb2xvcjojYzljOWM5O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYXBwLWV4cHMtY29udGFpbmVyLWxvZ28tZXhwcyBwOmxhc3QtY2hpbGR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNzk4NUExO1xufVxuXG4udGl0bGV7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgLmFwcC1leHBzLWNvbnRhaW5lci1sb2dvLWV4cHMgcHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuYXBwLWV4cHMtY29udGFpbmVyLWxvZ28tZXhwcyBwOmxhc3QtY2hpbGR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmFwcC1leHBzLXRpdGxlLXNlcGFyYXRlIGgye1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/exps/exps.component.ts":
/*!****************************************!*\
  !*** ./src/app/exps/exps.component.ts ***!
  \****************************************/
/*! exports provided: ExpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpsComponent", function() { return ExpsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _exps_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exps.service */ "./src/app/exps/exps.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ExpsComponent = /** @class */ (function () {
    function ExpsComponent(_expsService) {
        this._expsService = _expsService;
    }
    ExpsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._expsService.getExpFromAPIwithCache()
            .subscribe(function (res) { return _this.exps = res; }, function (err) { return console.error(err.status); });
    };
    ExpsComponent.ctorParameters = function () { return [
        { type: _exps_service__WEBPACK_IMPORTED_MODULE_1__["ExpsService"] }
    ]; };
    ExpsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exps',
            template: __importDefault(__webpack_require__(/*! raw-loader!./exps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exps/exps.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./exps.component.css */ "./src/app/exps/exps.component.css")).default]
        }),
        __metadata("design:paramtypes", [_exps_service__WEBPACK_IMPORTED_MODULE_1__["ExpsService"]])
    ], ExpsComponent);
    return ExpsComponent;
}());



/***/ }),

/***/ "./src/app/exps/exps.module.ts":
/*!*************************************!*\
  !*** ./src/app/exps/exps.module.ts ***!
  \*************************************/
/*! exports provided: ExpsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpsModule", function() { return ExpsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _exps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exps.component */ "./src/app/exps/exps.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _exps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exps.service */ "./src/app/exps/exps.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var ExpsModule = /** @class */ (function () {
    function ExpsModule() {
    }
    ExpsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
            declarations: [_exps_component__WEBPACK_IMPORTED_MODULE_2__["ExpsComponent"]],
            exports: [_exps_component__WEBPACK_IMPORTED_MODULE_2__["ExpsComponent"]],
            providers: [_exps_service__WEBPACK_IMPORTED_MODULE_4__["ExpsService"]]
        })
    ], ExpsModule);
    return ExpsModule;
}());



/***/ }),

/***/ "./src/app/exps/exps.service.ts":
/*!**************************************!*\
  !*** ./src/app/exps/exps.service.ts ***!
  \**************************************/
/*! exports provided: ExpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpsService", function() { return ExpsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ExpsService = /** @class */ (function () {
    function ExpsService(_http) {
        this._http = _http;
        this.url = '../assets/json/exps.json';
    }
    ExpsService.prototype.getExpFromAPIwithCache = function () {
        var _this = this;
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.data);
        }
        else if (this.observable) {
            return this.observable;
        }
        else {
            this.observable = this._http
                .get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                _this.observable = null;
                _this.data = response;
                return _this.data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
                var errorMessage = "Une erreur " + error.status + " est survenue en tentant de joindre " + error.url;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
            }));
            return this.observable;
        }
    };
    ExpsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ExpsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ExpsService);
    return ExpsService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2{\n    font-family: 'Alfa Slab One', cursive;\n    color: #7985A1#7985A1;\n}  \n\n.app-footer-container{\n    background-color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n}  \n\n.form-group label{\n    cursor: pointer;\n    font-size: 13px;\n}  \n\n.app-footer-section-rigth{\n    background: #7985A1;\n    padding: 20px;\n}  \n\n.app-footer-section-center-socials{\n    background: url('shattered-island.gif');\n    height: 100%\n}  \n\n.app-footer-section-center-socials ul{\n    text-align: center;\n    list-style: none;\n    padding-top: 30px;\n    padding-bottom: 10px;\n    margin-bottom: 0px;\n    padding-left:0px;\n}  \n\n.app-footer-section-center-socials li{\n    padding-bottom: 5px;\n    position: relative;\n    top: 50%;\n}  \n\n.app-footer-section-center-socials li a{\n    font-size: 52px;\n    display:block;\n    transition: all 0.5s ease-out;\n    color: white;\n}  \n\n.app-footer-section-center-socials li a:hover{\n    transform: rotate(60deg);\n    transform: scale(1.5);\n    color: #7985A1;\n}  \n\n.app-footer-section-right-map{\n    margin-top: 10px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLHVDQUEyRDtJQUMzRDtBQUNKOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgICBmb250LWZhbWlseTogJ0FsZmEgU2xhYiBPbmUnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNzk4NUExIzc5ODVBMTtcbn0gIFxuXG4uYXBwLWZvb3Rlci1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVse1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cblxuLmFwcC1mb290ZXItc2VjdGlvbi1yaWd0aHtcbiAgICBiYWNrZ3JvdW5kOiAjNzk4NUExO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4uYXBwLWZvb3Rlci1zZWN0aW9uLWNlbnRlci1zb2NpYWxze1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9zaGF0dGVyZWQtaXNsYW5kLmdpZicpO1xuICAgIGhlaWdodDogMTAwJVxufVxuLmFwcC1mb290ZXItc2VjdGlvbi1jZW50ZXItc29jaWFscyB1bHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OjBweDtcbn1cbi5hcHAtZm9vdGVyLXNlY3Rpb24tY2VudGVyLXNvY2lhbHMgbGl7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MCU7XG59XG4uYXBwLWZvb3Rlci1zZWN0aW9uLWNlbnRlci1zb2NpYWxzIGxpIGF7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXBwLWZvb3Rlci1zZWN0aW9uLWNlbnRlci1zb2NpYWxzIGxpIGE6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICBjb2xvcjogIzc5ODVBMTtcbn1cbi5hcHAtZm9vdGVyLXNlY3Rpb24tcmlnaHQtbWFwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _element_forms_element_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element-forms/element-forms.service */ "./src/app/element-forms/element-forms.service.ts");
/* harmony import */ var _presentation_presentation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../presentation/presentation.service */ "./src/app/presentation/presentation.service.ts");
/* harmony import */ var _blotterService_blotter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blotterService/blotter.service */ "./src/app/blotterService/blotter.service.ts");
/* harmony import */ var _quotesService_quotes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quotesService/quotes.service */ "./src/app/quotesService/quotes.service.ts");
/* harmony import */ var _config_error_inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/error_inputs */ "./src/app/config/error_inputs.ts");
/* harmony import */ var _config_labels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/labels */ "./src/app/config/labels.ts");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/__ivy_ngcc__/fesm5/ngx-toasta.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var FooterComponent = /** @class */ (function () {
    function FooterComponent(elementFormService, fb, el, presentationService, blotterService, quotesService, toastaService, toastaConfig) {
        var _this = this;
        this.elementFormService = elementFormService;
        this.fb = fb;
        this.el = el;
        this.presentationService = presentationService;
        this.blotterService = blotterService;
        this.quotesService = quotesService;
        this.toastaService = toastaService;
        this.toastaConfig = toastaConfig;
        this.validationConfig = _config_error_inputs__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.labelInputs = _config_labels__WEBPACK_IMPORTED_MODULE_7__["default"].input[0];
        this.postMailMessage = function (formValue) {
            if (_this.accountDetailsForm.valid === true) {
                _this.elementFormService.postContactForm(formValue);
                _this.accountDetailsForm.reset('');
                _this.toastFc('succes', 'Votre message est envoyé');
            }
            else if (_this.accountDetailsForm.valid === false || _this.accountDetailsForm.value.username == "" || _this.accountDetailsForm.value.email == "") {
                _this.toastFc('error', 'Erreur !!! Votre message n\'a pas été envoyé, Vérifier votre saisie...');
            }
        };
        this.createForms = function () {
            // user links form validations
            _this.accountDetailsForm = _this.fb.group({
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])),
                message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
                ]))
            });
        };
        this.toastFc = function (type, text) {
            switch (type) {
                case 'succes':
                    _this.toastaService.success(text);
                    break;
                case 'error':
                    _this.toastaService.error(text);
                    break;
                case 'warning':
                    _this.toastaService.warning(text);
                    break;
                case 'info':
                    _this.toastaService.info(text);
                    break;
            }
        };
        this.toastaConfig.theme = 'material';
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForms();
        this.presentationService.getSocialsFromAPIwithCache()
            .subscribe(function (res) { return _this.socials = res; }, function (err) { return console.error(err.status); });
        this.blotterService.mainBlotterSliding('Contactez-moi', 'Alfa Slab One, cursive', 45, '#7985A1', 8, 0.25, true);
        this.quotesService.getQuotes()
            .subscribe(function (res) {
            _this.quotesContent = res[0]['content'].replace('<p>', '').replace('</p>', '').replace('<br />');
            _this.quotesTitle = res[0]['title'];
            _this.quotesLink = res[0]['link'];
        }, function (err) { return console.error(err.status); });
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _element_forms_element_forms_service__WEBPACK_IMPORTED_MODULE_2__["ElementFormsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _presentation_presentation_service__WEBPACK_IMPORTED_MODULE_3__["PresentationService"] },
        { type: _blotterService_blotter_service__WEBPACK_IMPORTED_MODULE_4__["BlotterService"] },
        { type: _quotesService_quotes_service__WEBPACK_IMPORTED_MODULE_5__["QuotesService"] },
        { type: ngx_toasta__WEBPACK_IMPORTED_MODULE_8__["ToastaService"] },
        { type: ngx_toasta__WEBPACK_IMPORTED_MODULE_8__["ToastaConfig"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [_element_forms_element_forms_service__WEBPACK_IMPORTED_MODULE_2__["ElementFormsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _presentation_presentation_service__WEBPACK_IMPORTED_MODULE_3__["PresentationService"],
            _blotterService_blotter_service__WEBPACK_IMPORTED_MODULE_4__["BlotterService"],
            _quotesService_quotes_service__WEBPACK_IMPORTED_MODULE_5__["QuotesService"],
            ngx_toasta__WEBPACK_IMPORTED_MODULE_8__["ToastaService"],
            ngx_toasta__WEBPACK_IMPORTED_MODULE_8__["ToastaConfig"]])
    ], FooterComponent);
    return FooterComponent;
}());

;


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('a[href^="#"]').click(function () {
            var id = $(this).attr("href");
            var offset = $(id).offset().top;
            $('html, body').animate({ scrollTop: offset }, 'slow');
            return false;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: homeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeModule", function() { return homeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/nav.module */ "./src/app/nav/nav.module.ts");
/* harmony import */ var _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../presentation/presentation.module */ "./src/app/presentation/presentation.module.ts");
/* harmony import */ var _skills_skills_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills/skills.module */ "./src/app/skills/skills.module.ts");
/* harmony import */ var _job_job_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../job/job.module */ "./src/app/job/job.module.ts");
/* harmony import */ var _exps_exps_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../exps/exps.module */ "./src/app/exps/exps.module.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _scroll_back_button_scroll_back_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scroll-back-button/scroll-back-button.component */ "./src/app/scroll-back-button/scroll-back-button.component.ts");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/__ivy_ngcc__/fesm5/ngx-toasta.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var homeModule = /** @class */ (function () {
    function homeModule() {
    }
    homeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nav_nav_module__WEBPACK_IMPORTED_MODULE_3__["NavModule"],
                _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_4__["PresModule"],
                _skills_skills_module__WEBPACK_IMPORTED_MODULE_5__["SkillsModule"],
                _job_job_module__WEBPACK_IMPORTED_MODULE_6__["JobModule"],
                _exps_exps_module__WEBPACK_IMPORTED_MODULE_7__["ExpsModule"],
                ngx_toasta__WEBPACK_IMPORTED_MODULE_10__["ToastaModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _scroll_back_button_scroll_back_button_component__WEBPACK_IMPORTED_MODULE_9__["ScrollBackButtonComponent"]
            ],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
            providers: []
        })
    ], homeModule);
    return homeModule;
}());



/***/ }),

/***/ "./src/app/inputValids/input-valids.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/inputValids/input-valids.directive.ts ***!
  \*******************************************************/
/*! exports provided: InputValidsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidsDirective", function() { return InputValidsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var InputValidsDirective = /** @class */ (function () {
    function InputValidsDirective(el) {
        this.el = el;
    }
    InputValidsDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    InputValidsDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appInputValids]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InputValidsDirective);
    return InputValidsDirective;
}());



/***/ }),

/***/ "./src/app/job/Job.component.css":
/*!***************************************!*\
  !*** ./src/app/job/Job.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-job{\n    margin: 200px 10px 200px 10px; \n}\n\n.app-job-content{\n    background-color: #7985A1;\n    padding: 20px;\n    margin-bottom: 50px;    \n    margin-top: 30px;\n    margin-left: 5px;\n    margin-right: 5px;\n    text-align: center;\n    border-radius: 3px;  \n    height: 100%;\n    cursor: pointer;\n    overflow: hidden;\n}\n\n.app-job-content span:first-child{\n    font-size: 19px;\n    color: white;\n    font-weight: 300px;\n}\n\n.app-job-content p{\n    font-family: 'Open Sans', sans-serif;\n    opacity: 0;\n    text-align: left;\n}\n\n.app-job-content-ico{\n    font-size: 30px;\n    margin-right: 5px;\n    color: #333;\n}\n\n.app-job-content-ico:hover{\n    font-size: 30px;\n    color: black;\n}\n\n.app-job-content-p-displayed{\n    opacity: 1 !important;\n    transition: opacity 2000ms ease-out; \n}\n\n.app-job-content-span{\n    color: white;\n}\n\n.app-job-content img{\n    opacity: 0;\n    width: 50%;\n}\n\n.app-job-img-displayed{\n    opacity: 1 !important;\n    width: 100%;    \n    transition: opacity 2000ms ease-out; \n}\n\n.app-job-techno > i{\n    color: white;\n    font-size: 40px;\n    display: inline-block;\n}\n\n.close {\n    position: absolute;\n    display: none;\n    margin-left: 5px;\n    right: 9px;\n    top: 32px;\n    width: 32px;\n    height: 32px;\n    opacity: 0.3;\n    z-index: 1;\n}\n\n.close-displayed{\n    display: block;\n}\n\n.close:hover {\n    opacity: 1;\n}\n\n.app-job-title-separate{\n    margin: 20px 0px 0px 15px;\n    float: left;\n}\n\n.app-job-title-separate h2{\n    color: white;\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.hr-custom-title{\n    background-color: white;\n    height: 3px;\n    width: 270px;\n    margin-top: 13px;\n}\n\n.title{\n    float: left;\n    color: white;\n    margin-left: 5px;\n}\n\n@media screen and (max-width: 640px) {\n    .app-job-title-separate h2{\n        font-size: 15px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iL0pvYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxtQ0FBbUM7QUFDdkM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFJQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9qb2IvSm9iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWpvYntcbiAgICBtYXJnaW46IDIwMHB4IDEwcHggMjAwcHggMTBweDsgXG59XG5cbi5hcHAtam9iLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODVBMTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7ICAgIFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyAgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbi5hcHAtam9iLWNvbnRlbnQgc3BhbjpmaXJzdC1jaGlsZHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDBweDtcbn1cblxuLmFwcC1qb2ItY29udGVudCBwe1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hcHAtam9iLWNvbnRlbnQtaWNve1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmFwcC1qb2ItY29udGVudC1pY286aG92ZXJ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG4uYXBwLWpvYi1jb250ZW50LXAtZGlzcGxheWVke1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMDBtcyBlYXNlLW91dDsgXG59XG5cbi5hcHAtam9iLWNvbnRlbnQtc3BhbntcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hcHAtam9iLWNvbnRlbnQgaW1ne1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmFwcC1qb2ItaW1nLWRpc3BsYXllZHtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7ICAgIFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwMG1zIGVhc2Utb3V0OyBcbn1cbi5hcHAtam9iLXRlY2hubyA+IGl7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICByaWdodDogOXB4O1xuICAgIHRvcDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHotaW5kZXg6IDE7XG59XG4uY2xvc2UtZGlzcGxheWVke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNsb3NlOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5cblxuLmFwcC1qb2ItdGl0bGUtc2VwYXJhdGV7XG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmFwcC1qb2ItdGl0bGUtc2VwYXJhdGUgaDJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhyLWN1c3RvbS10aXRsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbn1cblxuLnRpdGxle1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC5hcHAtam9iLXRpdGxlLXNlcGFyYXRlIGgye1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/job/job.component.ts":
/*!**************************************!*\
  !*** ./src/app/job/job.component.ts ***!
  \**************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job.service */ "./src/app/job/job.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var JobComponent = /** @class */ (function () {
    function JobComponent(_jobService) {
        this._jobService = _jobService;
    }
    JobComponent.prototype.ngOnInit = function () {
        this.callJobServiceFor();
    };
    JobComponent.prototype.callJobServiceFor = function () {
        var _this = this;
        this._jobService.getJobsFromAPIwithCache()
            .subscribe(function (res) { return _this.jobs = res; }, function (err) { return console.error(err.status); });
        this._jobService.getPrintsFromAPIwithCache()
            .subscribe(function (res) { return _this.prints = res; }, function (err) { return console.error(err.status); });
    };
    JobComponent.prototype.display = function (jobs) {
        jobs.stateAnim = 'displayOk';
    };
    JobComponent.prototype.outDisplay = function (jobs) {
        jobs.stateAnim = 'none';
    };
    JobComponent.prototype.display2 = function (prints) {
        prints.stateAnim = 'displayOk';
    };
    JobComponent.prototype.outDisplay2 = function (prints) {
        prints.stateAnim = 'none';
    };
    JobComponent.ctorParameters = function () { return [
        { type: _job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"] }
    ]; };
    JobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('displayElement', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        'height': '60px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('displayOk', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        'height': '90%',
                        'background': 'linear-gradient(135deg, #ffffff 30%,#7985A1 100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('none => displayOk', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms cubic-bezier(0.6, -0.28, 0.735, 0.045)')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('displayOk => none', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms cubic-bezier(0.6, -0.28, 0.735, 0.045)')
                    ])
                ])
            ],
            selector: 'app-job',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Job.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/job/Job.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./Job.component.css */ "./src/app/job/Job.component.css")).default]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"]])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/job/job.module.ts":
/*!***********************************!*\
  !*** ./src/app/job/job.module.ts ***!
  \***********************************/
/*! exports provided: JobModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobModule", function() { return JobModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _job_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job.service */ "./src/app/job/job.service.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/modals.component */ "./src/app/modals/modals.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var JobModule = /** @class */ (function () {
    function JobModule() {
    }
    JobModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
            declarations: [_job_component__WEBPACK_IMPORTED_MODULE_2__["JobComponent"], _modals_modals_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]],
            exports: [_job_component__WEBPACK_IMPORTED_MODULE_2__["JobComponent"]],
            providers: [_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"]]
        })
    ], JobModule);
    return JobModule;
}());



/***/ }),

/***/ "./src/app/job/job.service.ts":
/*!************************************!*\
  !*** ./src/app/job/job.service.ts ***!
  \************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var JobService = /** @class */ (function () {
    function JobService(_http) {
        this._http = _http;
        this.url = '../assets/json/jobs.json';
        this.url2 = '../assets/json/prints.json';
    }
    JobService.prototype.getJobsFromAPIwithCache = function () {
        var _this = this;
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.data);
        }
        else if (this.observable) {
            return this.observable;
        }
        else {
            this.observable = this._http
                .get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                _this.observable = null;
                _this.data = response;
                return _this.data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
                var errorMessage = "Une erreur " + error.status + " est survenue en tentant de joindre " + error.url;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
            }));
            return this.observable;
        }
    };
    JobService.prototype.getPrintsFromAPIwithCache = function () {
        var _this = this;
        if (this.data2) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.data2);
        }
        else if (this.observable2) {
            return this.observable2;
        }
        else {
            this.observable2 = this._http
                .get(this.url2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                _this.observable2 = null;
                _this.data2 = response;
                return _this.data2;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
                var errorMessage = "Une erreur " + error.status + " est survenue en tentant de joindre " + error.url;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
            }));
            return this.observable2;
        }
    };
    JobService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    JobService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/modals/modals.component.css":
/*!*********************************************!*\
  !*** ./src/app/modals/modals.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-modal-absolute{\n  height: 150px;\n  width: 110px !important;\n  position: absolute;\n  top: 10px;\n  border-radius: 5px;\n  right: 100px;\n}\n\n.img-modal-full{\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvbW9kYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLW1vZGFsLWFic29sdXRle1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcmlnaHQ6IDEwMHB4O1xufVxuXG4uaW1nLW1vZGFsLWZ1bGx7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/modals/modals.component.ts":
/*!********************************************!*\
  !*** ./src/app/modals/modals.component.ts ***!
  \********************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "arrayModal", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/modals.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./modals.component.css */ "./src/app/modals/modals.component.css")).default]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-nav-link{\n    background-color: #1A1A1A !important;\n    font-size: 18px;\n}\n\n.app-nav-link a{\n    margin-left:20px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    text-decoration: none;\n    color: white;\n    cursor:pointer;    \n    transition: border-top 1s, border-bottom 1s, letter-spacing 1s;\n}\n\n.app-nav-link a:hover {\n    letter-spacing:4px;\n    color: white;\n    \n}\n\n.mdl-layout{\n    overflow: hidden;\n}\n\n.halloween{\n    margin-left: 10px\n}\n\n.mdl-layout--small-screen-only{\n    background-color: black;\n}\n\n.mdl-layout--small-screen-only .mdl-layout-title{\n    color: white;\n    font-weight: bold;\n}\n\n.mdl-layout--small-screen-only > .mdl-navigation > .mdl-navigation__link{\n    color: white;\n}\n\n.mdl-layout--small-screen-only > .mdl-navigation > .mdl-navigation__link:hover{\n    color: white;\n    background-color: #7985A1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGNBQWM7SUFDZCw4REFBOEQ7QUFDbEU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1uYXYtbGlua3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYXBwLW5hdi1saW5rIGF7XG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjpwb2ludGVyOyAgICBcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItdG9wIDFzLCBib3JkZXItYm90dG9tIDFzLCBsZXR0ZXItc3BhY2luZyAxcztcbn1cblxuLmFwcC1uYXYtbGluayBhOmhvdmVyIHtcbiAgICBsZXR0ZXItc3BhY2luZzo0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxufVxuXG4ubWRsLWxheW91dHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGFsbG93ZWVue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4XG59XG5cbi5tZGwtbGF5b3V0LS1zbWFsbC1zY3JlZW4tb25seXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1kbC1sYXlvdXQtLXNtYWxsLXNjcmVlbi1vbmx5IC5tZGwtbGF5b3V0LXRpdGxle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1kbC1sYXlvdXQtLXNtYWxsLXNjcmVlbi1vbmx5ID4gLm1kbC1uYXZpZ2F0aW9uID4gLm1kbC1uYXZpZ2F0aW9uX19saW5re1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1kbC1sYXlvdXQtLXNtYWxsLXNjcmVlbi1vbmx5ID4gLm1kbC1uYXZpZ2F0aW9uID4gLm1kbC1uYXZpZ2F0aW9uX19saW5rOmhvdmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4NUExO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/providers/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var NavModele = /** @class */ (function () {
    function NavModele(url, title) {
        this.url = url;
        this.title = title;
    }
    return NavModele;
}());
var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.array = [];
    }
    NavComponent.prototype.login = function () {
        this.authService.loginWithGoogle();
    };
    NavComponent.prototype.ngOnInit = function () {
        this.array = [
            /* new NavModele(null,'Services',this.login), */
            new NavModele('#projects', 'Projects'),
            new NavModele('#jobs', 'Job Expériences'),
            new NavModele('#contact', 'Contact'),
        ];
        this.sub = this.route
            .data
            .subscribe(function (value) { return console.log(value); });
    };
    NavComponent.ctorParameters = function () { return [
        { type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __importDefault(__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
        }),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.module.ts":
/*!***********************************!*\
  !*** ./src/app/nav/nav.module.ts ***!
  \***********************************/
/*! exports provided: NavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavModule", function() { return NavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var NavModule = /** @class */ (function () {
    function NavModule() {
    }
    NavModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]],
            exports: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]]
        })
    ], NavModule);
    return NavModule;
}());



/***/ }),

/***/ "./src/app/newsApi/news-api.component.css":
/*!************************************************!*\
  !*** ./src/app/newsApi/news-api.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-news-container {\n  margin-bottom: 50px;\n  margin-left: 17px;\n}\n\n.app-news-container h2 {\n  color: white;\n  font-family: 'Righteous', cursive;\n  font-weight: bold;\n}\n\n.app-news-img-container{\n  text-align: center;\n}\n\n.app-news-img-container img {\n  height: 500px;\n}\n\n.app-news-text {\n  height: 560px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n.app-news-text-container {\n  background-color: white;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 5px;\n  transition: 1s;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.app-news-text-container h3 {\n  font-weight: 500;\n  color: #7985A1;\n  font-size: 20px;\n  line-height: 24px;\n  margin: 0;\n}\n\n.app-news-content-container {\n  margin-bottom: 20px;\n  font-size: 18px;\n  background-color: white;\n  padding: 20px;\n  color: white;\n  margin-right: 17px;\n  background-color: #7985A1;\n}\n\n.app-news-content-container a {\n  color: black;\n  font-size: 14px;\n  transition: 2s;\n}\n\n.app-news-content-container a:hover {\n  color: lightblue;\n  font-size: 16px;\n}\n\n.app-news-spinner-img {\n  position: absolute;\n  z-index: 1;\n  /* top: 153px; */\n  bottom: -60px;\n  left: 29%;\n}\n\n.app-news-button-src {\n  margin-bottom: 10px;\n}\n\n.app-news-button-src button {\n  background-color: #7985A1;\n  color: white;\n  margin-bottom: 5px;\n}\n\n.app-news-button-src button.current {\n  background-color: rgb(255, 64, 129);\n}\n\n.app-news-text-container.active {\n  background-color: #7985A1;\n}\n\n.app-news-text-container h3.active {\n  color: white;\n}\n\n@media screen and (max-width: 640px) {\n  .app-news-content-container {\n    margin-right: 0px;\n  }\n\n  .app-news-container {\n    margin-left: 0px;\n  }\n\n  .app-news-img-container img {\n    height: auto;\n  }\n\n  .app-news-text {\n    margin-left: 15px;\n  }\n\n  .app-news-img-container {\n    margin-bottom: 10px;\n  }\n\n  .app-news-text {\n    height: 300px;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c0FwaS9uZXdzLWFwaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9uZXdzQXBpL25ld3MtYXBpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW5ld3MtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG59XG5cbi5hcHAtbmV3cy1jb250YWluZXIgaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcHAtbmV3cy1pbWctY29udGFpbmVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHAtbmV3cy1pbWctY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5hcHAtbmV3cy10ZXh0IHtcbiAgaGVpZ2h0OiA1NjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uYXBwLW5ld3MtdGV4dC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXBwLW5ld3MtdGV4dC1jb250YWluZXIgaDMge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzc5ODVBMTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXBwLW5ld3MtY29udGVudC1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODVBMTtcbn1cblxuLmFwcC1uZXdzLWNvbnRlbnQtY29udGFpbmVyIGEge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNpdGlvbjogMnM7XG59XG5cbi5hcHAtbmV3cy1jb250ZW50LWNvbnRhaW5lciBhOmhvdmVyIHtcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYXBwLW5ld3Mtc3Bpbm5lci1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIC8qIHRvcDogMTUzcHg7ICovXG4gIGJvdHRvbTogLTYwcHg7XG4gIGxlZnQ6IDI5JTtcbn1cblxuLmFwcC1uZXdzLWJ1dHRvbi1zcmMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXBwLW5ld3MtYnV0dG9uLXNyYyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4NUExO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmFwcC1uZXdzLWJ1dHRvbi1zcmMgYnV0dG9uLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NCwgMTI5KTtcbn1cblxuLmFwcC1uZXdzLXRleHQtY29udGFpbmVyLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTg1QTE7XG59XG5cbi5hcHAtbmV3cy10ZXh0LWNvbnRhaW5lciBoMy5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5hcHAtbmV3cy1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cblxuICAuYXBwLW5ld3MtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgLmFwcC1uZXdzLWltZy1jb250YWluZXIgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuYXBwLW5ld3MtdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAuYXBwLW5ld3MtaW1nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5hcHAtbmV3cy10ZXh0IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/newsApi/news-api.component.ts":
/*!***********************************************!*\
  !*** ./src/app/newsApi/news-api.component.ts ***!
  \***********************************************/
/*! exports provided: NewsApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiComponent", function() { return NewsApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _news_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-api.service */ "./src/app/newsApi/news-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NewsApiComponent = /** @class */ (function () {
    function NewsApiComponent(_NewsApiService, myElement) {
        this._NewsApiService = _NewsApiService;
        this.myElement = myElement;
        this.dataNews = [];
        this.imgClass = false;
        this.activeOnglet = false;
        this.noImg = '../../assets/images/dummy_600x400_ffffff_cccccc_no-image-.png';
    }
    NewsApiComponent.prototype.ngOnInit = function () {
        this.sendNewsDataGeneral();
        this.changeColorButtonSection();
    };
    NewsApiComponent.prototype.selectedStyle = function (item, id) {
        this.dataNews[id] = item;
    };
    NewsApiComponent.prototype.isSelectedItem = function (item, id) {
        return this.dataNews[id] && this.dataNews[id] === item;
    };
    ;
    NewsApiComponent.prototype.sendNewsDataGeneral = function () {
        var _this = this;
        this._NewsApiService.getNewsGeneral()
            .subscribe(function (res) {
            _this.addResHttpValueFirst(res);
        }, function (err) {
            console.log(err + 'Erreur de chargement categorie General');
        });
    };
    ;
    NewsApiComponent.prototype.sendNewsDataEntertainment = function () {
        var _this = this;
        this._NewsApiService.getNewsEntertainment()
            .subscribe(function (res) {
            _this.addResHttpValueFirst(res);
        }, function (err) {
            console.log(err + 'Erreur de chargement categorie Divertissement');
        });
    };
    ;
    NewsApiComponent.prototype.sendNewsDataHealth = function () {
        var _this = this;
        this._NewsApiService.getNewsHealth()
            .subscribe(function (res) {
            _this.addResHttpValueFirst(res);
        }, function (err) {
            console.log(err + 'Erreur de chargement categorie Santé');
        });
    };
    ;
    NewsApiComponent.prototype.sendNewsDataScience = function () {
        var _this = this;
        this._NewsApiService.getNewsScience()
            .subscribe(function (res) {
            _this.addResHttpValueFirst(res);
        }, function (err) {
            console.log(err + 'Erreur de chargement categorie Science');
        });
    };
    ;
    NewsApiComponent.prototype.sendNewsDataSports = function () {
        var _this = this;
        this._NewsApiService.getNewsSports()
            .subscribe(function (res) {
            _this.addResHttpValueFirst(res);
        }, function (err) {
            console.log(err + 'Erreur de chargement categorie Sports');
        });
    };
    ;
    NewsApiComponent.prototype.sendNewsDataTechnology = function () {
        var _this = this;
        this._NewsApiService.getNewsTechnology()
            .subscribe(function (res) {
            _this.addResHttpValueFirst(res);
        }, function (err) {
            console.log(err + 'Erreur de chargement categorie Technologie');
        });
    };
    ;
    NewsApiComponent.prototype.selectedSrcData = function (element) {
        this.selectSrcDataItem(element);
    };
    NewsApiComponent.prototype.selectSrcDataItem = function (element) {
        this.imgNews = this.dataNews[element].urlToImage;
        this.contentNews = this.dataNews[element].description;
        this.authorNews = this.dataNews[element].author;
        this.authorNewsLink = this.dataNews[element].url;
        this.srcName = this.dataNews[element].source.name;
        this.imgClass = true;
    };
    NewsApiComponent.prototype.addResHttpValueFirst = function (res) {
        this.dataNews = res.articles;
        this.imgNews = res.articles[0].urlToImage;
        this.contentNews = res.articles[0].description;
        this.authorNews = res.articles[0].author;
        this.authorNewsLink = res.articles[0].url;
        this.srcName = res.articles[0].source.name;
    };
    NewsApiComponent.prototype.changeColorButtonSection = function () {
        $('.app-news-button-src button').click(function () {
            $('.current').removeClass('current');
            $(this).addClass('current');
        });
    };
    NewsApiComponent.ctorParameters = function () { return [
        { type: _news_api_service__WEBPACK_IMPORTED_MODULE_1__["NewsApiService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NewsApiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-api',
            template: __importDefault(__webpack_require__(/*! raw-loader!./news-api.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/newsApi/news-api.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./news-api.component.css */ "./src/app/newsApi/news-api.component.css")).default]
        }),
        __metadata("design:paramtypes", [_news_api_service__WEBPACK_IMPORTED_MODULE_1__["NewsApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NewsApiComponent);
    return NewsApiComponent;
}());



/***/ }),

/***/ "./src/app/newsApi/news-api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/newsApi/news-api.service.ts ***!
  \*********************************************/
/*! exports provided: NewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiService", function() { return NewsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var NewsApiService = /** @class */ (function () {
    function NewsApiService(_http) {
        this._http = _http;
    }
    NewsApiService.prototype.getNewsGeneral = function () {
        return this._http.get("https://newsapi.org/v2/top-headlines?country=fr&apiKey=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi.apiKeys) // appel virtuel comme vers un webservice // comme sur then(fn,fr) callback ok et non
            .map(function (data1) { return data1; })
            .do(function (x) { return console.log(x); });
    };
    NewsApiService.prototype.getNewsEntertainment = function () {
        return this._http.get("https://newsapi.org/v2/top-headlines?country=fr&category=entertainment&apiKey=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi.apiKeys) // appel virtuel comme vers un webservice // comme sur then(fn,fr) callback ok et non
            .map(function (data1) { return data1; })
            .do(function (x) { return console.log(x); });
    };
    NewsApiService.prototype.getNewsHealth = function () {
        return this._http.get("https://newsapi.org/v2/top-headlines?country=fr&category=health&apiKey=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi.apiKeys) // appel virtuel comme vers un webservice // comme sur then(fn,fr) callback ok et non
            .map(function (data1) { return data1; })
            .do(function (x) { return console.log(x); });
    };
    NewsApiService.prototype.getNewsScience = function () {
        return this._http.get("https://newsapi.org/v2/top-headlines?country=fr&category=science&apiKey=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi.apiKeys) // appel virtuel comme vers un webservice // comme sur then(fn,fr) callback ok et non
            .map(function (data1) { return data1; })
            .do(function (x) { return console.log(x); });
    };
    NewsApiService.prototype.getNewsSports = function () {
        return this._http.get("https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi.apiKeys) // appel virtuel comme vers un webservice // comme sur then(fn,fr) callback ok et non
            .map(function (data1) { return data1; })
            .do(function (x) { return console.log(x); });
    };
    NewsApiService.prototype.getNewsTechnology = function () {
        return this._http.get("https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi.apiKeys) // appel virtuel comme vers un webservice // comme sur then(fn,fr) callback ok et non
            .map(function (data1) { return data1; })
            .do(function (x) { return console.log(x); });
    };
    NewsApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    NewsApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsApiService);
    return NewsApiService;
}());



/***/ }),

/***/ "./src/app/office/office.component.css":
/*!*********************************************!*\
  !*** ./src/app/office/office.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-office-img-profil{\n    width: 50px;\n    border-radius: 20px;\n    margin-right: 20px;\n}\napp-element-form{\n    padding-top: 150px;\n}\n.mdl-layout-title span:last-child{\n    font-size: 24px;\n    font-family: 'Righteous', cursive;\n}\n.mdl-layout__header{\n    background-color: #7985A1;\n}\n.mdl-layout-title > span:first-child {\n    margin-right: 10px;\n}\n.cursor-pointer{\n    cursor: pointer;\n}\n@media screen and (max-width: 640px) {\n    .mdl-layout-title span:first-child{\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL29mZmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztBQUNyQztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvb2ZmaWNlL29mZmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1vZmZpY2UtaW1nLXByb2ZpbHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmFwcC1lbGVtZW50LWZvcm17XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuLm1kbC1sYXlvdXQtdGl0bGUgc3BhbjpsYXN0LWNoaWxke1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG59XG5cbi5tZGwtbGF5b3V0X19oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODVBMTtcbn1cblxuLm1kbC1sYXlvdXQtdGl0bGUgPiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY3Vyc29yLXBvaW50ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC5tZGwtbGF5b3V0LXRpdGxlIHNwYW46Zmlyc3QtY2hpbGR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/office/office.component.ts":
/*!********************************************!*\
  !*** ./src/app/office/office.component.ts ***!
  \********************************************/
/*! exports provided: OfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeComponent", function() { return OfficeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/providers/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var OfficeComponent = /** @class */ (function () {
    function OfficeComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.user = this.authService.afAuth.authState;
        this.user.subscribe(function (auth) {
            _this.addValueAuth(auth);
        });
    }
    ;
    OfficeComponent.prototype.addValueAuth = function (auth) {
        if (auth) {
            this.pseudo = auth.displayName;
            this.email = auth.email;
            this.photoUrl = auth.photoURL;
        }
    };
    OfficeComponent.prototype.ngOnInit = function () {
    };
    OfficeComponent.prototype.logout = function () {
        this.authService.logout();
        window.location.href = '/';
    };
    OfficeComponent.ctorParameters = function () { return [
        { type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    OfficeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'office',
            template: __importDefault(__webpack_require__(/*! raw-loader!./office.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/office.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./office.component.css */ "./src/app/office/office.component.css")).default]
        }),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OfficeComponent);
    return OfficeComponent;
}());



/***/ }),

/***/ "./src/app/office/office.module.ts":
/*!*****************************************!*\
  !*** ./src/app/office/office.module.ts ***!
  \*****************************************/
/*! exports provided: officeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "officeModule", function() { return officeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _office_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./office.component */ "./src/app/office/office.component.ts");
/* harmony import */ var _element_forms_element_forms_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../element-forms/element-forms.module */ "./src/app/element-forms/element-forms.module.ts");
/* harmony import */ var _newsApi_news_api_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../newsApi/news-api.component */ "./src/app/newsApi/news-api.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var officeModule = /** @class */ (function () {
    function officeModule() {
    }
    officeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _element_forms_element_forms_module__WEBPACK_IMPORTED_MODULE_3__["ElementFormsModule"],
            ],
            declarations: [
                _office_component__WEBPACK_IMPORTED_MODULE_2__["OfficeComponent"],
                _newsApi_news_api_component__WEBPACK_IMPORTED_MODULE_4__["NewsApiComponent"]
            ],
            exports: [_office_component__WEBPACK_IMPORTED_MODULE_2__["OfficeComponent"]],
            providers: []
        })
    ], officeModule);
    return officeModule;
}());



/***/ }),

/***/ "./src/app/presentation/presentation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/presentation/presentation.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mdl-card{\n    width: 100%;\n}\n.app-pres {\n    background-image: url('img-pres.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 1000px;\n    background-position: center;\n}\n.app-pres-logo {\n    \n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#6639b6+0,000000+52 */\n    background: #7985A1; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(135deg, #7985A1 0%,#000000 52%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7985A1', endColorstr='#000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */\n    margin-top: 50px;\n    \n    position: absolute;\n    top: 300px;\n}\n.app-pres-logo h1{\n    font-family: 'Open Sans', sans-serif;\n    color: white;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.app-pres-logo h2 span{\n    font-size: 5.5vw;\n    display: inline-block;\n}\n.app-pres-logo h2 span:first-child{\n    font-family: 'Alfa Slab One', cursive;\n    color: white;\n}\n.app-pres-logo h2 span:nth-child(2){\n    background: linear-gradient(to left, #7985A1, white);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-size: 20vw;\n    display: inline;\n}\n.app-pres-logo h2 span:last-child{\n    font-family: 'Righteous', cursive;\n    color: #7985A1;\n}\n.app-pres-logo a{\n    text-decoration: none;\n    color: white;\n    cursor:pointer;\n}\n.app-pres-socials a\n{\n    color: white;\n    display: inline-block;\n    font-size: 42px;\n    margin-bottom: 10px;\n    margin: 0 15px 10px 0;\n    transition: all 0.5s ease-out;\n}\n.app-pres-socials a:hover\n{\n    opacity: 1;\n    color: #7985A1;\n    transform: rotate(60deg);\n    transform: scale(1.5);\n}\n.ml5 {\n    \n    font-weight: 300;\n    font-size: 120px;\n    color: #402d2d;\n}\n.ml5 .text-wrapper {\n    position: relative;\n    display: inline-block;\n    padding-top: 0.1em;\n    padding-right: 0.05em;\n    padding-bottom: 0.15em;\n    line-height: 1em;\n}\n.ml5 .line {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    height: 3px;\n    width: 100%;\n    background-color: #402d2d;\n    transform-origin: 0.5 0;\n}\n.ml5 .ampersand {\n    font-family: Baskerville, \"EB Garamond\", serif;\n    font-style: italic;\n    font-weight: 400;\n    width: 1em;\n    margin-right: -0.1em;\n    margin-left: -0.1em;\n}\n.ml5 .letters {\n    display: inline-block;\n    opacity: 0;\n}\n.container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n}\nsvg {\n    max-width: 8rem;\n    width: 100%;\n    height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQ0FBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsMkJBQTJCO0FBQy9CO0FBRUE7O0lBRUksK0dBQStHO0lBQy9HLG1CQUFtQixFQUFFLGlCQUFpQixFQUM2QixhQUFhLEVBQ1gsNEJBQTRCO0lBQ2pHLDJEQUEyRCxFQUFFLHFEQUFxRDtJQUNsSCxtSEFBbUgsRUFBRSwwQ0FBMEM7SUFDL0osZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxZQUFZO0FBQ2hCO0FBRUE7SUFFSSxvREFBb0Q7SUFDcEQsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUdBOztJQUVJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsNkJBQTZCO0FBQ2pDO0FBRUE7O0lBRUksVUFBVTtJQUNWLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCO0FBR0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZGwtY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5hcHAtcHJlcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2ltZy1wcmVzLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5hcHAtcHJlcy1sb2dvIHtcbiAgICBcbiAgICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jNjYzOWI2KzAsMDAwMDAwKzUyICovXG4gICAgYmFja2dyb3VuZDogIzc5ODVBMTsgLyogT2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNzk4NUExIDAlLCAjMDAwMDAwIDUyJSk7IC8qIEZGMy42LTE1ICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNzk4NUExIDAlLCMwMDAwMDAgNTIlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzk4NUExIDAlLCMwMDAwMDAgNTIlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM3OTg1QTEnLCBlbmRDb2xvcnN0cj0nIzAwMDAwMCcsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAwcHg7XG59XG5cbi5hcHAtcHJlcy1sb2dvIGgxe1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmFwcC1wcmVzLWxvZ28gaDIgc3BhbntcbiAgICBmb250LXNpemU6IDUuNXZ3O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFwcC1wcmVzLWxvZ28gaDIgc3BhbjpmaXJzdC1jaGlsZHtcbiAgICBmb250LWZhbWlseTogJ0FsZmEgU2xhYiBPbmUnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFwcC1wcmVzLWxvZ28gaDIgc3BhbjpudGgtY2hpbGQoMil7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc5ODVBMSwgd2hpdGUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzk4NUExLCB3aGl0ZSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMjB2dztcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5hcHAtcHJlcy1sb2dvIGgyIHNwYW46bGFzdC1jaGlsZHtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM3OTg1QTE7XG59XG5cbi5hcHAtcHJlcy1sb2dvIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuXG4uYXBwLXByZXMtc29jaWFscyBhXG57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW46IDAgMTVweCAxMHB4IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi5hcHAtcHJlcy1zb2NpYWxzIGE6aG92ZXJcbntcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjNzk4NUExO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cblxuLm1sNSB7XG4gICAgXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDEyMHB4O1xuICAgIGNvbG9yOiAjNDAyZDJkO1xufVxuXG4ubWw1IC50ZXh0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDAuMWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMDVlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4xNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG59XG5cbi5tbDUgLmxpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDJkMmQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMC41IDA7XG59XG5cbi5tbDUgLmFtcGVyc2FuZCB7XG4gICAgZm9udC1mYW1pbHk6IEJhc2tlcnZpbGxlLCBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHdpZHRoOiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC4xZW07XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjFlbTtcbn1cblxuLm1sNSAubGV0dGVycyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5zdmcge1xuICAgIG1heC13aWR0aDogOHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/presentation/presentation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/presentation/presentation.component.ts ***!
  \********************************************************/
/*! exports provided: PresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresComponent", function() { return PresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _presentation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation.service */ "./src/app/presentation/presentation.service.ts");
/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/TweenMax */ "./node_modules/gsap/TweenMax.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/* declare var anime: any;
declare var jquery:any;
declare var $ :any; */
var PresComponent = /** @class */ (function () {
    function PresComponent(_PresentationService) {
        this._PresentationService = _PresentationService;
    }
    PresComponent.prototype.ngOnInit = function () {
        var _this = this;
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        var animation_ease = gsap_TweenMax__WEBPACK_IMPORTED_MODULE_2__["Linear"].easeNone;
        var animation_js = new gsap_TweenMax__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
            repeat: -1,
            yoyo: true
        });
        var animation_angular = new gsap_TweenMax__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
            repeat: -1,
            yoyo: true
        });
        var animation_sass = new gsap_TweenMax__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
            repeat: -1,
            yoyo: true
        });
        animation_js
            .to("#circle_yellow", 4, { x: 0, ease: animation_ease }, 0, 0)
            .to("#small_circle", 4, { x: 0, ease: animation_ease }, 0, 0)
            .to("#small_circle", 4, { x: 0 }, 0, 0)
            .to("#small_circle", 0.2, { skewX: -60, scaleY: 0.2 }, "fly")
            .to("#small_circle", 4, { fill: hue }, 0, 0)
            .to("#cube", 4, {
            opacity: 1,
            fill: "rgb(255,255,255)",
            x: 0,
            rotation: 0,
            ease: animation_ease
        }, 0, 3000)
            .to("#small_circle", 4, { skew: 0 }, 0, 0);
        animation_angular
            .to("#text_left", 6, { x: 0, ease: animation_ease }, 0, 0)
            .to("#text_right", 6, { x: 0, ease: animation_ease }, 0, 0)
            .to("#polygon", 6, { opacity: 1, scale: 1, y: 0, x: 0 }, 0, 0);
        animation_sass
            .to("#text_sass", 4, { x: 0, y: 0, skewX: -60, scaleY: 0.2, ease: animation_ease }, 0, 0);
        this._PresentationService.getSocialsFromAPIwithCache()
            .subscribe(function (res) { return _this.socials = res; }, function (err) { return console.error(err.status); });
    };
    PresComponent.ctorParameters = function () { return [
        { type: _presentation_service__WEBPACK_IMPORTED_MODULE_1__["PresentationService"] }
    ]; };
    PresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pres',
            template: __importDefault(__webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/presentation.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./presentation.component.css */ "./src/app/presentation/presentation.component.css")).default]
        }),
        __metadata("design:paramtypes", [_presentation_service__WEBPACK_IMPORTED_MODULE_1__["PresentationService"]])
    ], PresComponent);
    return PresComponent;
}());



/***/ }),

/***/ "./src/app/presentation/presentation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/presentation/presentation.module.ts ***!
  \*****************************************************/
/*! exports provided: PresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresModule", function() { return PresModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _presentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentation.component */ "./src/app/presentation/presentation.component.ts");
/* harmony import */ var _presentation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentation.service */ "./src/app/presentation/presentation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PresModule = /** @class */ (function () {
    function PresModule() {
    }
    PresModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_presentation_component__WEBPACK_IMPORTED_MODULE_2__["PresComponent"]],
            exports: [_presentation_component__WEBPACK_IMPORTED_MODULE_2__["PresComponent"]],
            providers: [_presentation_service__WEBPACK_IMPORTED_MODULE_3__["PresentationService"]]
        })
    ], PresModule);
    return PresModule;
}());



/***/ }),

/***/ "./src/app/presentation/presentation.service.ts":
/*!******************************************************!*\
  !*** ./src/app/presentation/presentation.service.ts ***!
  \******************************************************/
/*! exports provided: PresentationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationService", function() { return PresentationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PresentationService = /** @class */ (function () {
    function PresentationService(_http) {
        this._http = _http;
        this.url = '../assets/json/socials.json';
    }
    PresentationService.prototype.getSocialsFromAPIwithCache = function () {
        var _this = this;
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.data);
        }
        else if (this.observable) {
            return this.observable;
        }
        else {
            this.observable = this._http
                .get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                _this.observable = null;
                _this.data = response;
                return _this.data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
                var errorMessage = "Une erreur " + error.status + " est survenue en tentant de joindre " + error.url;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
            }));
            return this.observable;
        }
    };
    PresentationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    PresentationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PresentationService);
    return PresentationService;
}());



/***/ }),

/***/ "./src/app/providers/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider();
    }
    AuthService.prototype.loginWithGoogle = function () {
        return this.afAuth.auth.signInWithRedirect(this.provider);
    };
    AuthService.prototype.logout = function () {
        return firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().signOut();
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/quotesService/quotes.service.ts":
/*!*************************************************!*\
  !*** ./src/app/quotesService/quotes.service.ts ***!
  \*************************************************/
/*! exports provided: QuotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesService", function() { return QuotesService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var QuotesService = /** @class */ (function () {
    function QuotesService(_http) {
        this._http = _http;
        this.urlGetQuotes = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_=';
    }
    QuotesService.prototype.getQuotes = function () {
        this.random = Math.floor(Math.random() * 100);
        return this._http.get(this.urlGetQuotes + this.random).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data1) { return data1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (x) { return console.log(x); }));
    };
    QuotesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    QuotesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuotesService);
    return QuotesService;
}());



/***/ }),

/***/ "./src/app/scroll-back-button/scroll-back-button.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/scroll-back-button/scroll-back-button.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-scroll-back-button{\n    position: fixed;\n    right: 10px;\n    top: 90%;\n    z-index: 3;\n}\n\nbutton {\n    opacity: 0;\n    transition: all 500ms ease-in;\n}\n\nbutton:hover{\n    transform: scale(1.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsLWJhY2stYnV0dG9uL3Njcm9sbC1iYWNrLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Njcm9sbC1iYWNrLWJ1dHRvbi9zY3JvbGwtYmFjay1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtc2Nyb2xsLWJhY2stYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDkwJTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG5idXR0b24ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW47XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59Il19 */");

/***/ }),

/***/ "./src/app/scroll-back-button/scroll-back-button.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/scroll-back-button/scroll-back-button.component.ts ***!
  \********************************************************************/
/*! exports provided: ScrollBackButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollBackButtonComponent", function() { return ScrollBackButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _windowElement_window_element_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../windowElement/window-element.service */ "./src/app/windowElement/window-element.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ScrollBackButtonComponent = /** @class */ (function () {
    function ScrollBackButtonComponent(_elementRef, _WindowElementService) {
        this._elementRef = _elementRef;
        this._WindowElementService = _WindowElementService;
        this.window = this._WindowElementService.nativeWindow;
    }
    ScrollBackButtonComponent.prototype.colorButton = function () {
        this._elementRef.nativeElement.childNodes["0"].firstElementChild.style.backgroundColor = this.bgColorButton;
    };
    ScrollBackButtonComponent.prototype.windowScrollDisplay = function () {
        var self = this;
        this.window.addEventListener('scroll', function () {
            if (this.window.scrollY > 0) {
                self._elementRef.nativeElement.childNodes["0"].firstElementChild.style.opacity = 1;
            }
            else {
                self._elementRef.nativeElement.childNodes["0"].firstElementChild.style.opacity = 0;
            }
        });
    };
    ScrollBackButtonComponent.prototype.scrollTop = function () {
        this.window.scrollTo(0, 0);
    };
    ScrollBackButtonComponent.prototype.ngOnInit = function () {
        this.colorButton();
        this.windowScrollDisplay();
    };
    ScrollBackButtonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _windowElement_window_element_service__WEBPACK_IMPORTED_MODULE_1__["WindowElementService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ScrollBackButtonComponent.prototype, "bgColorButton", void 0);
    ScrollBackButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scroll-back-button',
            template: __importDefault(__webpack_require__(/*! raw-loader!./scroll-back-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-back-button/scroll-back-button.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./scroll-back-button.component.css */ "./src/app/scroll-back-button/scroll-back-button.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _windowElement_window_element_service__WEBPACK_IMPORTED_MODULE_1__["WindowElementService"]])
    ], ScrollBackButtonComponent);
    return ScrollBackButtonComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-skills{\n    background-color:\"#1A1A1A\";\n    margin: 200px 10px 200px 10px;\n}\n\n.app-skills-item span{\n    color: white;\n    display: block;\n    font-size: 1.8em;\n    letter-spacing: 0.5px;\n}\n\n.app-skills-item img{\n    width: 80%;\n}\n\n@media screen and (max-width: 640px) {\n    .app-skills-item span{\n        font-size: 1.3em;\n    }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNraWxsc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOlwiIzFBMUExQVwiO1xuICAgIG1hcmdpbjogMjAwcHggMTBweCAyMDBweCAxMHB4O1xufVxuXG4uYXBwLXNraWxscy1pdGVtIHNwYW57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uYXBwLXNraWxscy1pdGVtIGltZ3tcbiAgICB3aWR0aDogODAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC5hcHAtc2tpbGxzLWl0ZW0gc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB9XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __importDefault(__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")).default]
        })
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.module.ts":
/*!*****************************************!*\
  !*** ./src/app/skills/skills.module.ts ***!
  \*****************************************/
/*! exports provided: SkillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsModule", function() { return SkillsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.component */ "./src/app/skills/skills.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SkillsModule = /** @class */ (function () {
    function SkillsModule() {
    }
    SkillsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"]],
            exports: [_skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"]]
        })
    ], SkillsModule);
    return SkillsModule;
}());



/***/ }),

/***/ "./src/app/weatherApi/weather.service.ts":
/*!***********************************************!*\
  !*** ./src/app/weatherApi/weather.service.ts ***!
  \***********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var WeatherService = /** @class */ (function () {
    function WeatherService(_http) {
        this._http = _http;
    }
    WeatherService.prototype.getWeatherCurrent = function (cityName) {
        return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].weatherApi.apiKeys).pipe(// appel virtuel comme vers un webservice // comme sur then(fn,fr) callback ok et non
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data1) { return data1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (x) { return console.log(x); }));
    };
    WeatherService.prototype.getYourPosition = function (lat, long) {
        return this._http.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=metric&appid=" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].weatherApi.apiKeys).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data2) { return data2; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (x) { return console.log(x); }));
    };
    WeatherService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/windowElement/window-element.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/windowElement/window-element.service.ts ***!
  \*********************************************************/
/*! exports provided: WindowElementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowElementService", function() { return WindowElementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowElementService = /** @class */ (function () {
    function WindowElementService() {
    }
    Object.defineProperty(WindowElementService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowElementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WindowElementService);
    return WindowElementService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyAcVDCvLIjsLJtPURCJmDzqAzom7lh9CfI",
        authDomain: "angular4-adrienleteintur-c4e11.firebaseapp.com",
        databaseURL: "https://angular4-adrienleteintur-c4e11.firebaseio.com",
        projectId: "angular4-adrienleteintur-c4e11",
        storageBucket: "angular4-adrienleteintur-c4e11.appspot.com",
        messagingSenderId: "537650330182"
    },
    weatherApi: {
        apiKeys: '28de745d768ffc16e78ffdd0c98c0779'
    },
    newsApi: {
        apiKeys: '38ebc5051f664a78bbfa50c9d9ceb5c2'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment.prod */ "./src/environments/environment.prod.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adrienleteinturier/Desktop/AdrienLeteinturier-WebDev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map