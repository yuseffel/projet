import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFilieresComponent } from './cfilieres.component';

describe('CFilieresComponent', () => {
  let component: CFilieresComponent;
  let fixture: ComponentFixture<CFilieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFilieresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CFilieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
