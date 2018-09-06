import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  public arrayPages = []

  protected _initialPage
  public _totalPagination
  public pageSelected = 0;
  constructor() { }

  ngOnInit() {
  }


  @Output() selectedKey = new EventEmitter();

  @Input()
  set totalPagination(value) {
    this._totalPagination = value
  }

  @Input()
  set initialPage(value) {
    this._initialPage = value
    this.showNum(value)
    this.pageSelected = value
  }

  searchIcons(opt) {
    if (opt == 'next') {
      this.pageSelected += 1
    } else {
      this.pageSelected -= 1
    }
    this.selectedKey.emit({ 'key': this.pageSelected })
  }

  selectPage(key) {
    this.selectedKey.emit({ 'key': key })
    this.pageSelected = key
  }


  showNum(a) {
    this.arrayPages = []
    for (let i = a - 3; i <= a + 3 && i < this._totalPagination; i++) {
      this.arrayPages.push(i >= 0 ? i : null)
    }
    return this.arrayPages.filter(evt => evt != null)
  }
}
