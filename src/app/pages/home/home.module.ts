import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeGlobalFeedComponent } from './home-global-feed/home-global-feed.component';
import { HomeMyFeedComponent } from './home-my-feed/home-my-feed.component';
import { HomeTagComponent } from './home-tag/home-tag.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, HomeGlobalFeedComponent, HomeMyFeedComponent, HomeTagComponent],
  exports: [HomeComponent, HomeGlobalFeedComponent, HomeMyFeedComponent, HomeTagComponent],
})
export class HomeModule { }
