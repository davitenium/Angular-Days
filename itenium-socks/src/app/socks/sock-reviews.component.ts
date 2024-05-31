import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SocksService } from './socks.service';
import { Review } from './sock.model';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
//import { TimeagoPipeModule } from './timeago.pipe.module';


@Component({
  selector: 'app-sock-reviews',
  standalone: true,
  imports: [NgFor, AsyncPipe, TimeagoModule],
  templateUrl: './sock-reviews.component.html'
})
export class SockReviewsComponent {
  reviews$!: Observable<Review[]>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.reviews$ = this.socksService.getLatestReviews();
  }

  public relativeDate(review: Review): number {
    return new Date(review.added).getMilliseconds();
  }
  public toDate(review: Review): Date { 
    return new Date(review.added);
  }
}
