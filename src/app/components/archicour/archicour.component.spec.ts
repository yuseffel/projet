import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchicourComponent } from './archicour.component';

describe('ArchicourComponent', () => {
  let component: ArchicourComponent;
  let fixture: ComponentFixture<ArchicourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchicourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchicourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
