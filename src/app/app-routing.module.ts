import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanionComponent } from './companion/companion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'companion', component: CompanionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
