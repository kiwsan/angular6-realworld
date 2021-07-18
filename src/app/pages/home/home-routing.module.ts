import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGlobalFeedComponent } from './home-global-feed/home-global-feed.component';
import { HomeMyFeedComponent } from './home-my-feed/home-my-feed.component';
import { HomeTagComponent } from './home-tag/home-tag.component';
import { HomeComponent } from './home.component';

import { IsAuthenticatedGuardService } from '../../services/is-authenticated-guard.service';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: HomeGlobalFeedComponent
    },
    {
      path: 'my-feed',
      component: HomeMyFeedComponent,
      canActivate: [IsAuthenticatedGuardService]
    },
    {
      path: 'tag/:tag',
      component: HomeTagComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
