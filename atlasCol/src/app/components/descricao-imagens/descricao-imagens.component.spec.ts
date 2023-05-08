import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescricaoImagensComponent } from './descricao-imagens.component';

describe('DescricaoImagensComponent', () => {
  let component: DescricaoImagensComponent;
  let fixture: ComponentFixture<DescricaoImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoImagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
