import { Component, OnInit } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-yandex-map',
  template: `<div id="map"></div>`,
  styleUrls: ['./yandex-map.component.css']
})
export class YandexMapComponent implements OnInit {

  ngOnInit() {
    ymaps.ready(() => {
      const spbCoordinates = [59.9343, 30.3351];

      const myMap = new ymaps.Map("map", {
        center: spbCoordinates,
        zoom: 12
      });

      for (let i = 0; i < 3; i++) {
        const lat = this.getRandomNumber(59.8, 60);
        const lng = this.getRandomNumber(30.2, 30.5);

        const placemark = new ymaps.Placemark([lat, lng], {
          hintContent: 'Ресторан'
        });

        myMap.geoObjects.add(placemark);
      }
    });
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

}
