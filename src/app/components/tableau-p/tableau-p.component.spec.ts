import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauPComponent } from './tableau-p.component';

describe('TableauPComponent', () => {
  let component: TableauPComponent;
  let fixture: ComponentFixture<TableauPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
