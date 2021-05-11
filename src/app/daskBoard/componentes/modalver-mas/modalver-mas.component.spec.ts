import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalverMasComponent } from './modalver-mas.component';

describe('ModalverMasComponent', () => {
  let component: ModalverMasComponent;
  let fixture: ComponentFixture<ModalverMasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalverMasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalverMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
