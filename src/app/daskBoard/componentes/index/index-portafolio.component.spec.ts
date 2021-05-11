import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPortafolioComponent } from './index-portafolio.component';

describe('IndexPortafolioComponent', () => {
  let component: IndexPortafolioComponent;
  let fixture: ComponentFixture<IndexPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPortafolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
