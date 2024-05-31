import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeagoPipe } from 'ngx-timeago';

@NgModule({
  declarations: [TimeagoPipe],
  imports: [CommonModule],
  exports: [TimeagoPipe]
})
export class TimeagoPipeModule {}