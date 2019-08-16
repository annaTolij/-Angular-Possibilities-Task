import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChildrenComponent } from './second-children.component';

describe('SecondChildrenComponent', () => {
  let component: SecondChildrenComponent;
  let fixture: ComponentFixture<SecondChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
