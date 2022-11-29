import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostInterface } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private errorSubscription : Subscription;

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
    //ERROR
    this.errorSubscription = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })

    this.isFetching = true
    // Send Http request
    this.postService.fetchPost().subscribe(data => {
      this.isFetching = false;
      this.loadedPosts = data;
    },

    error => {
      this.isFetching = false;
      this.error = error.error.error
    })

  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);

  }

  error = null;

  onFetchPosts() {
    this.isFetching = true
    // Send Http request
    this.postService.fetchPost().subscribe(data => {
      this.isFetching = false;
      this.loadedPosts = data;
    },
      error => {
        this.isFetching = false;
        this.error = error.error.error
      }
    )
  }

  onHandleError() {
    this.error = null;
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePost().subscribe(()=> {
      this.loadedPosts = [];
    })
  }

  loadedPosts : PostInterface[] = [];
  isFetching = false;

}
