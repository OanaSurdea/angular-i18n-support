import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppLanguageEnum, AppLocaleEnum } from '../enums';
import { IAppLanguage } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppLanguageService {
  public appLanguages: IAppLanguage[] = [
    { code: AppLocaleEnum.EN, label: AppLanguageEnum.English },
    { code: AppLocaleEnum.IT, label: AppLanguageEnum.Italian },
    { code: AppLocaleEnum.RO, label: AppLanguageEnum.Romanian }
  ];
  public $selectedLanguage: BehaviorSubject<IAppLanguage> = new BehaviorSubject(this.appLanguages[0]);

  constructor() { }
}
