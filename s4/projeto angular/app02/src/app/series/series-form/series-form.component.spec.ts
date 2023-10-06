import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesFormComponent } from './series-form.component';

describe('SeriesFormComponent', () => {
  let component: SeriesFormComponent;
  let fixture: ComponentFixture<SeriesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesFormComponent]
    });
    fixture = TestBed.createComponent(SeriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
