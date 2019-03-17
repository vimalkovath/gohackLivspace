import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {AddComponent} from './pages/add/add.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import { WizardComponent } from './ui/wizard/wizard.component';
import { DesignerComponent } from './ui/designer/designer.component';
import { ExploreComponent } from './ui/explore/explore.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: WizardComponent},
  {path: 'designer', component: DesignerComponent},
  {path: 'explore', component: ExploreComponent},

  {path: 'designer/:city', component: DetailsComponent},
  {path: 'details/:city', component: DetailsComponent},
  {path: 'add', component: AddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
