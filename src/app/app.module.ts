import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatStepperModule, MatHorizontalStepper } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule, MatButtonModule, } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { WeatherService } from './services/weather/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { AddComponent } from './pages/add/add.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UiService } from './services/ui/ui.service';
import { WizardComponent } from './ui/wizard/wizard.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { DesignerComponent } from './ui/designer/designer.component';
import { DesignerCardComponent } from './ui/designer-card/designer-card.component';
import { ExploreComponent } from './ui/explore/explore.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    WeatherCardComponent,
    AddCardComponent,
    AddComponent,
    LoginComponent,
    SignupComponent,
    AddCardComponent,
    WizardComponent,
    DesignerComponent,
    DesignerCardComponent,
    ExploreComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
    , MatCardModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSelectModule
  ],
  exports: [
    MatStepperModule,
    CdkStepperModule,
    MatHorizontalStepper,
    MatFormFieldModule
  ],
  providers: [
    WeatherService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
