import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudoComponent } from './estudo.component';

describe('EstudoComponent', () => {
  let component: EstudoComponent;
  let fixture: ComponentFixture<EstudoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudoComponent]
    });
    fixture = TestBed.createComponent(EstudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
