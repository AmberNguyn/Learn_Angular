import { Component, OnInit } from '@angular/core';
import { interval, observable, Observable, Subscription } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data: number) => {
          console.log(data);
        },
        (error: Error) => {
          console.log(error.message);
          alert(error.message);
        },
        () => {
          console.log('completed!');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
