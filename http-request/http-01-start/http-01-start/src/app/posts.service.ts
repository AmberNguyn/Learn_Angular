import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PostInterface } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}
  // ====== CREATE POST =====
  createAndStorePost(title: string, content: string) {
    const postData: PostInterface = {
      title: title,
      content: content,
    };
    this.http
      .post(
        'https://ng-complete-guide-48127-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response',
          responseType: 'json' // responseType: 'text'
        }
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  // ===== FETCH POST =====
  fetchPost() {
    return this.http
      .get<{ [key: string]: PostInterface }>(
        'https://ng-complete-guide-48127-default-rtdb.firebaseio.com/posts.json',

        {
          headers: new HttpHeaders({ 'Custom-header': 'Hello' }),
        }
      )

      .pipe(
        map((response) => {
          const postArray: PostInterface[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              postArray.push({ ...response[key], id: key });
            }
          }
          return postArray;
        }),
        catchError((errorRes) => {
          //send to analytic or whatever, some tasks that you don't need to emit
          return throwError(errorRes);
        })
      );
  }

  deletePost() {
    return this.http
      .delete(
        'https://ng-complete-guide-48127-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Response){
            console.log(event.body)
          }
        })
      );
  }
}
