import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather/weather.service';
import { UiService } from '../../services/ui/ui.service';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-designer-card',
  templateUrl: './designer-card.component.html',
  styleUrls: ['./designer-card.component.css']
})
export class DesignerCardComponent implements OnInit {

  @Input() id;
  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  darkMode: boolean;

  constructor(public weather: WeatherService,
    public router: Router,
    public ui: UiService) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });


  }

  ngOnDestroy() {

  }

  openDetails(id) {
    this.router.navigateByUrl('/designer/' + id);
  }

}
