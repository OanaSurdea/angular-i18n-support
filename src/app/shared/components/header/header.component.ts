import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAppLanguage } from '../../../shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title?: string;
  @Input() languages?: IAppLanguage[];
  @Input() selectedLanguage?: IAppLanguage;
  @Output() onLanguageSelect = new EventEmitter<IAppLanguage>();

  constructor() { }

  public selectNewLanguage(language: IAppLanguage): void {
    this.onLanguageSelect.emit(language);
  }

}
