import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCartoesComponent } from './lista-cartoes.component';

describe('ListaCartoesComponent', () => {
  let component: ListaCartoesComponent;
  let fixture: ComponentFixture<ListaCartoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCartoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
