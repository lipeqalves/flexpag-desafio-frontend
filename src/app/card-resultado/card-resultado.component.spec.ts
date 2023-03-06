import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResultadoComponent } from './card-resultado.component';

describe('CardResultadoComponent', () => {
  let component: CardResultadoComponent;
  let fixture: ComponentFixture<CardResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardResultadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
