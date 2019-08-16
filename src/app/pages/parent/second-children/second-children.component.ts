import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'second-child',
  templateUrl: './second-children.component.html',
  styleUrls: ['./second-children.component.scss']
})
export class SecondChildrenComponent implements OnInit {
  @Input() trigger: boolean;
  @Output() triggerChange = new EventEmitter();
  change() {
    this.triggerChange.emit(this.trigger);
  }
  constructor() { }

  ngOnInit() { }

}
