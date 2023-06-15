import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitdppComponent } from './architdpp.component';

describe('ArchitdppComponent', () => {
  let component: ArchitdppComponent;
  let fixture: ComponentFixture<ArchitdppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitdppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitdppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
