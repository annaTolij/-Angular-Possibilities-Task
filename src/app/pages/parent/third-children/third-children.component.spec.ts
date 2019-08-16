import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdChildrenComponent } from './third-children.component';

describe('ThirdChildrenComponent', () => {
  let component: ThirdChildrenComponent;
  let fixture: ComponentFixture<ThirdChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
