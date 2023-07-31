import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanionComponent } from './companion/companion.component';
import { CompanionSelectComponent } from './companion-select/companion-select.component';
import { CreateCompanionComponent } from './create-companion/create-companion.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: CompanionSelectComponent },
      { path: 'companion', component: CompanionComponent },
      { path: 'create', component: CreateCompanionComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
