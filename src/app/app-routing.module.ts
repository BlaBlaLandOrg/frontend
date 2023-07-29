import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanionComponent } from './companion/companion.component';
import { CompanionSelectComponent } from './companion-select/companion-select.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: CompanionSelectComponent },
      { path: 'companion', component: CompanionComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
