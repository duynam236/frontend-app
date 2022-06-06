import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChungnhanComponent } from './chungnhan.component';

describe('ChungnhanComponent', () => {
  let component: ChungnhanComponent;
  let fixture: ComponentFixture<ChungnhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChungnhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChungnhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
