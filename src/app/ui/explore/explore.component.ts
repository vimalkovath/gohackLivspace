import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
data;
  constructor(private weather: WeatherService,
   ) { }

  ngOnInit() {
    this.weather.getTrendsByName('kitchen')
    .subscribe((data: string) => {
      // console.log(data,'data');
      this.data=data;
    });
  }

  Submit(f){
console.log(f.value);

// this.data='';
this.weather.getTrendsByName(f.value)
.subscribe((data: string) => {
  // console.log(data,'how is it');
  this.data=data;
});


  }



}
