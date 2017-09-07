import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImageComponent } from './car-image.component';

describe('CarImageComponent', () => {
  let component: CarImageComponent;
  let fixture: ComponentFixture<CarImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
