import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitdpComponent } from './architdp.component';

describe('ArchitdpComponent', () => {
  let component: ArchitdpComponent;
  let fixture: ComponentFixture<ArchitdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitdpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
