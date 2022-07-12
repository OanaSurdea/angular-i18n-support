import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IArtist } from '../../shared/interfaces';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public artists?: IArtist[];

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this._initArtists();
  }

  private _initArtists(): void {
    this.artists = [{
      name: 'Adele',
      imageUrl: '../../../assets/media/artists/adele.jpg',
      description: this.translateService.instant('i18n.artists.cardDescription'),
    }];

  }

}
