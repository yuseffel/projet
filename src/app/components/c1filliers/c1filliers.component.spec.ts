import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1filliersComponent } from './c1filliers.component';

describe('C1filliersComponent', () => {
  let component: C1filliersComponent;
  let fixture: ComponentFixture<C1filliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1filliersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1filliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
