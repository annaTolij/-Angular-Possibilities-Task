import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChildrenComponent } from './first-children.component';

describe('FirstChildrenComponent', () => {
  let component: FirstChildrenComponent;
  let fixture: ComponentFixture<FirstChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
