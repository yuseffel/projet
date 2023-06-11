import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauContaComponent } from './tableau-conta.component';

describe('TableauContaComponent', () => {
  let component: TableauContaComponent;
  let fixture: ComponentFixture<TableauContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
