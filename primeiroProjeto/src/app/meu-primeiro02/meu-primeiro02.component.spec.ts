import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiro02Component } from './meu-primeiro02.component';

describe('MeuPrimeiro02Component', () => {
  let component: MeuPrimeiro02Component;
  let fixture: ComponentFixture<MeuPrimeiro02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeiro02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiro02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
