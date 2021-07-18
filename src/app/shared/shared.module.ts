import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from '../components/article-list/article-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  ArticleListComponent
];

const SHAREDS = [
  CommonModule,
  NgZorroAntdModule,
  RouterModule
];
@NgModule({
  imports: [
    ...SHAREDS
  ],
  declarations: [...COMPONENTS],
  exports: [
    ...SHAREDS,
    ...COMPONENTS
  ]
})
export class SharedModule { }
