import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDetalheComponent } from './serie-detalhe.component';

describe('SerieDetalheComponent', () => {
  let component: SerieDetalheComponent;
  let fixture: ComponentFixture<SerieDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerieDetalheComponent]
    });
    fixture = TestBed.createComponent(SerieDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
