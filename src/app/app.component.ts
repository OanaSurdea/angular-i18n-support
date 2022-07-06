import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IAppLanguage } from './shared/interfaces';
import { AppLanguageService } from './shared/services/app-language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Learn internationalization';
  public languageList: IAppLanguage[];
  public selectedLanguage: IAppLanguage;

  constructor(
    private appLanguageService: AppLanguageService,
    private translateService: TranslateService
  ) {
    this.languageList = this.appLanguageService.appLanguages;
    this.selectedLanguage = this.appLanguageService.$selectedLanguage.value;

    this.translateService.setDefaultLang(this.selectedLanguage.code);
    this.translateService.use(this.selectedLanguage.code);
  }

  public handleLanguageSelect(language: IAppLanguage): void {
    this._updateSelectedLanguage(language);
  }

  private _updateSelectedLanguage(language: IAppLanguage): void {
    this.appLanguageService.$selectedLanguage.next(language);
    this.translateService.use(language.code);
    this.selectedLanguage = language;
  }
}
