import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFichierComponent } from './all-fichier.component';

describe('AllFichierComponent', () => {
  let component: AllFichierComponent;
  let fixture: ComponentFixture<AllFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFichierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
