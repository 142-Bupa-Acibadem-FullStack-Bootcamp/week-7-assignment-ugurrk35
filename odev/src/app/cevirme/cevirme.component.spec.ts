import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CevirmeComponent } from './cevirme.component';

describe('CevirmeComponent', () => {
  let component: CevirmeComponent;
  let fixture: ComponentFixture<CevirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CevirmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CevirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
