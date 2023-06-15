import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiexamenComponent } from './archiexamen.component';

describe('ArchiexamenComponent', () => {
  let component: ArchiexamenComponent;
  let fixture: ComponentFixture<ArchiexamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiexamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
