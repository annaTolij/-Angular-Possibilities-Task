import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'third-child',
  templateUrl: './third-children.component.html',
  styleUrls: ['./third-children.component.scss']
})
export class ThirdChildrenComponent implements OnInit {
  @Input() trigger: boolean;
  @Output() triggerChange = new EventEmitter();
  change() {
    this.triggerChange.emit(this.trigger);
  }
  constructor() { }

  ngOnInit() { }

}
