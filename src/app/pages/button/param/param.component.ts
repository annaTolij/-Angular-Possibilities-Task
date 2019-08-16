import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.scss']
})
export class ParamComponent implements OnInit {

  public id: number;

  constructor(private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
  }

}
