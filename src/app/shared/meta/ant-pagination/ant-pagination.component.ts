import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ant-pagination',
  templateUrl: './ant-pagination.component.html',
  styleUrls: ['./ant-pagination.component.scss']
})
export class AntPaginationComponent implements OnInit {

  constructor() { }
  @Input() nzPageIndex;
  @Input() nzTotal;
  @Output() nzPageIndexChange = new EventEmitter<number>();
  ngOnInit() {
  }
  refreshStatus() {
    this.nzPageIndexChange.emit(this.nzPageIndex);
  }

}
