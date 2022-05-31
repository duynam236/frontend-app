import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtdialogComponent } from './ttdialog.component';

describe('TtdialogComponent', () => {
  let component: TtdialogComponent;
  let fixture: ComponentFixture<TtdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
