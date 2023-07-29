import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanionSelectComponent } from './companion-select/companion-select.component';
import { PlaybackComponent } from './playback/playback.component';
import { MatCardModule } from '@angular/material/card';
import { CreateCompanionComponent } from './create-companion/create-companion.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanionComponent } from './companion/companion.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanionSelectComponent,
    PlaybackComponent,
    CreateCompanionComponent,
    CompanionComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
