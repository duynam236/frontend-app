import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhtraComponent } from './thanhtra.component';

describe('ThanhtraComponent', () => {
  let component: ThanhtraComponent;
  let fixture: ComponentFixture<ThanhtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
