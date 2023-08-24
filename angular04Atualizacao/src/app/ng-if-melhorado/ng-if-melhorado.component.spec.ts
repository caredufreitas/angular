import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfMelhoradoComponent } from './ng-if-melhorado.component';

describe('NgIfMelhoradoComponent', () => {
  let component: NgIfMelhoradoComponent;
  let fixture: ComponentFixture<NgIfMelhoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfMelhoradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfMelhoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
