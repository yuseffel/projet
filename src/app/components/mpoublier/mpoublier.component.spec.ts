import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPOublierComponent } from './mpoublier.component';

describe('MPOublierComponent', () => {
  let component: MPOublierComponent;
  let fixture: ComponentFixture<MPOublierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPOublierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPOublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
