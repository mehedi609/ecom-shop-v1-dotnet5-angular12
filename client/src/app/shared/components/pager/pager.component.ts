import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {
  @Input('totalCount') totalCount: number;
  @Input('pageSize') pageSize: number;
  @Output('pageChanged') pageChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onPagerChange(event: any) {
    this.pageChanged.emit(event.page);
  }
}
