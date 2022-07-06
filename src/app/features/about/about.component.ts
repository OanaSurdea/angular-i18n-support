import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public dogBreeds: any[] = [{
    name: 'Shiba Inu',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
