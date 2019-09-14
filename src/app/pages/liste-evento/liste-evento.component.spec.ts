import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEventoComponent } from './liste-evento.component';

describe('ListeEventoComponent', () => {
  let component: ListeEventoComponent;
  let fixture: ComponentFixture<ListeEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
