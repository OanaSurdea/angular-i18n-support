import { Component, Input, OnInit } from '@angular/core';
import { IAppLanguage } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  @Input() languages?: IAppLanguage[];
  @Input() selectedLanguage?: IAppLanguage;

  constructor() { }

  ngOnInit(): void {
  }

}
