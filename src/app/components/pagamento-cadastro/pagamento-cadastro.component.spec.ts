import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoCadastroComponent } from './pagamento-cadastro.component';

describe('PagamentoCadastroComponent', () => {
  let component: PagamentoCadastroComponent;
  let fixture: ComponentFixture<PagamentoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
