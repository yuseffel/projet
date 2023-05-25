import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceaComponent } from './espacea.component';

describe('EspaceaComponent', () => {
  let component: EspaceaComponent;
  let fixture: ComponentFixture<EspaceaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
