import { Component, OnInit } from '@angular/core';

import { ImagesService } from '../images.service';


@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.sass']
})
export class DogComponent implements OnInit {

  constructor(private imagesService: ImagesService) { }

  public dogImageUrl: String;

  dogGenerator() {


    this.imagesService.getDogImage().subscribe(
      dogImage => {
        this.dogImageUrl = dogImage.message;
      }
    );


  }

  ngOnInit() {
    this.dogGenerator();
  }


}
