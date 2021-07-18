
import { Inject, Injectable, InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('apiUrl');
@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(@Inject(API_URL) public urlPrefix) { }

  getFeedArticlesUrl(): any {
    return `${this.urlPrefix}/api/articles/feed`;
  }

  getCurrentUserUrl(): string {
    return `${this.urlPrefix}/api/user`;
  }

  getArticlesUrl(): string {
    return `${this.urlPrefix}/api/articles`;
  }

  getArticleUrl(articleSlug: string): string {
    return `${this.urlPrefix}/api/articles/${articleSlug}`;
  }

  getPopularTagsUrl(): string {
    return `${this.urlPrefix}/api/tags`;
  }

  getLoginUrl(): string {
    return `${this.urlPrefix}/api/users/login`;
  }

  getUsersUrl(): string {
    return `${this.urlPrefix}/api/users`;
  }

  getProfileUrl(username: string): string {
    return `${this.urlPrefix}/api/profiles/${username}`;
  }

  getFollowUrl(username: string): string {
    return `${this.getProfileUrl(username)}/follow`;
  }

  getFavoriteUrl(articleSlug: string): string {
    return `${this.getArticleUrl(articleSlug)}/favorite`;
  }

  getCommentsUrl(articleSlug: string): string {
    return `${this.getArticleUrl(articleSlug)}/comments`;
  }

  getCommentUrl(articleSlug: string, commentId: number) {
    return `${this.getCommentsUrl(articleSlug)}/${commentId}`;
  }
}
