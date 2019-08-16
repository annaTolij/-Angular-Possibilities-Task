import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'first-child',
  templateUrl: './first-children.component.html',
  styleUrls: ['./first-children.component.scss']
})
export class FirstChildrenComponent implements OnInit {
  @Input() trigger: boolean;
  @Output() triggerChange = new EventEmitter();
  change() {
    this.triggerChange.emit(this.trigger);
  }
  constructor() { }

  ngOnInit() { }

}
