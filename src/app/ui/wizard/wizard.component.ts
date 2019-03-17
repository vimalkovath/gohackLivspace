import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  fiveFormGroup: FormGroup;
  // data;

  data = {
    'posts': [
      {
        'url': '/p/BvCgPMdHWt_/',
        'thumbnail': 'https://rocheledecorating.com.au/website-images/modernhome.jpg',
        'caption': 'No photo description available.',
        'hastag': [],

      }, {
        'url': '/p/Bu6Akt5nXq3/',
        'thumbnail': 'https://rocheledecorating.com.au/website-images/Open_Plan_Bedroom_Decorate_Design1.jpg',
        'caption': 'No photo description available.',
        'hastag': [],

      }, {
        'url': '/p/ButUphfH7GZ/',
        'thumbnail': 'https://rocheledecorating.com.au/website-images/property_styling_brisbane_2.jpg',
        'caption': 'No photo description available.',
        'hastag': [],

      }, {
        'url': '/p/BuYv3MRH-Uo/',
        'thumbnail': 'https://rocheledecorating.com.au/website-images/Warehouse_Lounge_Dining_Decorate_Design1.jpg',
        'caption': 'No photo description available.',
        'hastag': [],

      }, {
        'url': '/p/BuXC9aVHrwe/',
        'thumbnail': 'https://rocheledecorating.com.au/website-images/Art_Deco_House_Decorate_Design8.jpg',
        'caption': 'Image may contain: text',
        'hastag': [],

      }, {
        'url': '/p/BuWYIFQnwZ9/',
        'thumbnail': 'https://rocheledecorating.com.au/website-images/Hawthorne_Interior_Designer_Rochele_48.jpg',
        'hastag': [],

      }
    ]
  };

  // toppings = new FormControl();
  toppingList: string[] = [
    'Poojaroom'
    ,
    'kitchen'
    ,
    'livingroom'
    ,
    'bathroom'
    ,
    'bar room'
    ,
    'home'
    ,
    'bookshelf'
    ,
    'bedroom'
    ,
    'wardrobe'
    ,
    'wall'
    ,
    'balcony'];

  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  formControls = this.data.posts.map(control => new FormControl(false));

  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private weather:WeatherService) {


  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    this.fourFormGroup = this._formBuilder.group({
      fourCtrl: ['', Validators.required],
      // toppings: ['', Validators.required],

    });


    this.fiveFormGroup = this._formBuilder.group({
      // fiveCtrl: ['', Validators.required]
      fiveCtrl: new FormArray(this.formControls),
    });


  }

  submit() {
    const selectedPreferences = this.fiveFormGroup.value.fiveCtrl
      .map((checked, index) => checked ? this.data.posts[index].url : null)
      .filter(value => value !== null);

    console.log(selectedPreferences, 'selectedPreferences');
  }

  mychoice() {
    console.log(this.fourFormGroup.controls.fourCtrl.value);
    this.weather.setData(this.fourFormGroup.controls.fourCtrl.value);
  // const selectedPreferences = this.fourFormGroup.value.fourCtrl
  // .map((checked, index) => checked ? this.data.posts[index].url : null)
  // .filter(value => value !== null);
  console.log();
  }

  gotoDesign(){
    this.router.navigateByUrl('/designer');
  }
}
