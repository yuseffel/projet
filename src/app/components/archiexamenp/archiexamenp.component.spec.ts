import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiexamenpComponent } from './archiexamenp.component';

describe('ArchiexamenpComponent', () => {
  let component: ArchiexamenpComponent;
  let fixture: ComponentFixture<ArchiexamenpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiexamenpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiexamenpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
