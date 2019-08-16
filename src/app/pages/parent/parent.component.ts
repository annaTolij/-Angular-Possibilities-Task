import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent implements OnInit {
  public firstChild = false;
  public secondChild = false;
  public thirdChild = false;

  constructor() { }

  ngOnInit() {
  }
}
