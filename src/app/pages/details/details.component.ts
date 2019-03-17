import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather/weather.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  designer: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;

  today: string;

  day1Name: string;
  day1State: string;
  day1Temp: number;


  day2Name: string;
  day2State: string;
  day2Temp: number;

  day3Name: string;
  day3State: string;
  day3Temp: number;

  day4Name: string;
  day4State: string;
  day4Temp: number;

  day5Name: string;
  day5State: string;
  day5Temp: number;
  filterdData;
  constructor(public activeRouter: ActivatedRoute, public weather: WeatherService) {
    // this.animal = this.route.snapshot.paramMap.get("id")
  }
  data = [
    { 'image': 'assets/images/bathroom1.jpg', 'designer': '1', 'type': 'bathroom' },
    { 'image': 'assets/images/bathroom4.jpg', 'designer': '1', 'type': 'bathroom' },
    { 'image': 'assets/images/balcony2.jpg', 'designer': '1', 'type': 'bathroom' },
    { 'image': 'assets/images/bookshelf1.jpg', 'designer': '1', 'type': 'bookshelf' },
    { 'image': 'assets/images/bookshelf3.png', 'designer': '1', 'type': 'bookshelf' },
    { 'image': 'assets/images/kitchen1.jpg', 'designer': '1', 'type': 'kitchen' },
    { 'image': 'assets/images/kitchen3.png', 'designer': '1', 'type': 'kitchen' },
    { 'image': 'assets/images/livingroom2.jpg', 'designer': '1', 'type': 'livingroom' },
    { 'image': 'assets/images/poojaroom2.jpg', 'designer': '1', 'type': 'Poojaroom' },
    { 'image': 'assets/images/poojaroom3.jpg', 'designer': '1', 'type': 'Poojaroom' },

    { 'image': 'assets/images/bathroom2.jpg', 'designer': '2', 'type': 'bathroom' },
    { 'image': 'assets/images/bathroom3.jpg', 'designer': '2', 'type': 'bathroom' },
    { 'image': 'assets/images/bathroom5.jpg', 'designer': '2', 'type': 'bathroom' },
    { 'image': 'assets/images/balcony.jpg', 'designer': '2', 'type': 'balcony' },
    { 'image': 'assets/images/bookshelf2.png', 'designer': '2', 'type': 'bookshelf' },
    { 'image': 'assets/images/bookshelf4.png', 'designer': '2', 'type': 'bookshelf' },
    { 'image': 'assets/images/kitchen2.png', 'designer': '2', 'type': 'kitchen' },
    { 'image': 'assets/images/kitchen4.png', 'designer': '2', 'type': 'kitchen' },
    { 'image': 'assets/images/livingroom1.jpg', 'designer': '2', 'type': 'livingroom' },
    { 'image': 'assets/images/livingroom3.jpg', 'designer': '2', 'type': 'livingroom' },
    { 'image': 'assets/images/pooja1.jpg', 'designer': '2', 'type': 'Poojaroom' },
    { 'image': 'assets/images/pooja4.jpg', 'designer': '2', 'type': 'Poojaroom' },
  ];
  // 'bathroom': [
  //   { 'image': 'assets/images/bathroom1.jpg', 'designer': '2' },
  //   { 'image': 'assets/images/bathroom2.jpg', 'designer': '1' },
  //   { 'image': 'assets/images/bathroom3.jpg', 'designer': '1' },
  //   { 'image': 'assets/images/bathroom4.jpg', 'designer': '2' },
  //   { 'image': 'assets/images/bathroom5.jpg', 'designer': '1' },
  // ],
  // 'balcony': [
  //   { 'image': 'assets/images/balcony.jpg', 'designer': '1' },
  //   { 'image': 'assets/images/balcony2.jpg', 'designer': '2' },
  // ],
  // 'bookshelf': [
  //   { 'image': 'assets/images/bookshelf1.jpg', 'designer': '2' },
  //   { 'image': 'assets/images/bookshelf2.jpg', 'designer': '1' },
  //   { 'image': 'assets/images/bookshelf3.jpg', 'designer': '2' },
  //   { 'image': 'assets/images/bookshelf4.jpg', 'designer': '1' },
  // ],
  // 'kitchen': [
  //   { 'image': 'assets/images/kitchen1.jpg', 'designer': '2' },
  //   { 'image': 'assets/images/kitchen2.jpg', 'designer': '1' },
  //   { 'image': 'assets/images/kitchen3.jpg', 'designer': '2' },
  //   { 'image': 'assets/images/kitchen4.jpg', 'designer': '1' },
  // ],
  // 'livingroom': [
  //   { 'image': 'assets/images/livingroom1.jpg', 'designer': '1' },
  //   { 'image': 'assets/images/livingroom2.jpg', 'designer': '2' },
  //   { 'image': 'assets/images/livingroom3.jpg', 'designer': '1' },
  // ],
  // 'poojaroom': [
  //   { 'image': 'assets/images/pooja1.jpg', 'designer': '1' },
  //   { 'image': 'assets/images/poojaroom2.jpg', 'designer': '2' },
  //   { 'image': 'assets/images/poojaroom3.jpg', 'designer': '2' },
  //   { 'image': 'assets/images/pooja4.jpg', 'designer': '1' },
  // ],
  // };
  ngOnInit() {
    const filter = this.weather.getData();
    const todayNumberInWeek = new Date().getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.today = days[todayNumberInWeek];



    this.activeRouter.paramMap.subscribe((route: any) => {

      this.designer = route.params.city;
      console.log(route.params, 'this.designer', this.designer);
      this.filterdData = this.data.filter(dat => dat.designer === this.designer);
      if (filter) {
        if (filter.length > 0)
          this.filterdData = this.data.filter(dat => dat.type === filter[0]);
      }
    });

  }

}

