import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemestreproComponent } from './semestrepro.component';

describe('SemestreproComponent', () => {
  let component: SemestreproComponent;
  let fixture: ComponentFixture<SemestreproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemestreproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemestreproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
