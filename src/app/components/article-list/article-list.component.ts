import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/internal/operators/finalize';
import { tap } from 'rxjs/operators';
import { Article } from 'src/app/models/article.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnChanges, OnInit {

  private pageSize = 20;

  constructor(private apiService: ApiService) {
    this.currentPage = 1;
  }

  articles: Article[];
  articlesCount: number;
  currentPage: number;
  isLoading: boolean;

  @Input()
  author: string;

  @Input()
  tag: string;

  @Input()
  favoritedBy: string;

  @Input()
  myFeed: boolean;

  @Input()
  article: Article;

  ngOnChanges(changes: SimpleChanges) {
    this.getArticles();
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    const offset = (this.currentPage - 1) * this.pageSize;

    const params = {
      limit: this.pageSize,
      offset,
      author: this.author,
      favoritedBy: this.favoritedBy,
      tag: this.tag
    };

    const articleFeed: Observable<any> = this.myFeed ?
      this.apiService.getFeedArticles(params.limit, params.offset) :
      this.apiService.getArticles(params);

    this.isLoading = true;

    articleFeed.
      pipe(tap({
        next: (res) => {
          // console.log('tap success');
          this.isLoading = false;
        },
        error: (err) => {
          // console.log('tap error', err);
          this.isLoading = false;
        },
        complete: () => console.log('tap complete')
      })).
      subscribe(res => {
        this.articles = res.articles;
        this.articlesCount = res.articlesCount;
      });
  }

  pageCount(): number {
    return Math.ceil(this.articlesCount / this.pageSize);
  }

  onPageIndexChange($event) {
    this.currentPage = $event;
    this.getArticles();
  }

  toggleFavoritedArticle(article: Article) {
    const observable: Observable<Article> = article.favorited ?
      this.apiService.unfavoriteArticle(article.slug) :
      this.apiService.favoriteArticle(article.slug);

    observable.subscribe(m => this.article = m);
  }

  favoriteClass(article: Article) {
    return {
      'btn-primary': article.favorited,
      'btn-outline-primary': !article.favorited
    };
  }
}
