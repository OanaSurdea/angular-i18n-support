import { Component, OnInit } from '@angular/core';
import { IAppLanguage } from './shared/interfaces';
import { AppLanguageService } from './shared/services/app-language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'Learn internationalization';
  public languages?: IAppLanguage[];
  public selectedLanguage?: IAppLanguage;

  private appLocale?: string;

  constructor(private appLanguageService: AppLanguageService) { }

  ngOnInit(): void {
    this.languages = this.appLanguageService.appLanguages;

    this.appLocale = window.location.pathname.split('/')[1];
    this.selectedLanguage = this.languages.find(f => f.locale === this.appLocale) || this.languages[0];
  }
}
