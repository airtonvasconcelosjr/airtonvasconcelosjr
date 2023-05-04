import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaImagensComponent } from './lista-imagens.component';

describe('ListaImagensComponent', () => {
  let component: ListaImagensComponent;
  let fixture: ComponentFixture<ListaImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaImagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
