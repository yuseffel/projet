import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchicourpComponent } from './archicourp.component';

describe('ArchicourpComponent', () => {
  let component: ArchicourpComponent;
  let fixture: ComponentFixture<ArchicourpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchicourpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchicourpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
