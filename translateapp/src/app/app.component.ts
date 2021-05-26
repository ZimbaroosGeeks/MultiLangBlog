import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,

    private LanguageService: LanguageService,
  ) {  this.initializeApp();
  }
  initializeApp() {
    console.log("im initiliazed");
    
    this.platform.ready().then(() => {
    this.LanguageService.setInitialAppLanguage();
    });
  }
}
