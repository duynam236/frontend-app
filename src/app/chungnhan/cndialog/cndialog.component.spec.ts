import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CndialogComponent } from './cndialog.component';

describe('CndialogComponent', () => {
  let component: CndialogComponent;
  let fixture: ComponentFixture<CndialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CndialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CndialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
