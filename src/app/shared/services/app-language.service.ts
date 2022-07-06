import { Injectable } from '@angular/core';
import { AppLanguageEnum, AppLocaleEnum } from '../enums';
import { IAppLanguage } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppLanguageService {
  public appLanguages: IAppLanguage[] = [
    { locale: AppLocaleEnum.EN, label: AppLanguageEnum.English },
    { locale: AppLocaleEnum.IT, label: AppLanguageEnum.Italian },
    { locale: AppLocaleEnum.RO, label: AppLanguageEnum.Romanian }
  ];

  constructor() { }
}
