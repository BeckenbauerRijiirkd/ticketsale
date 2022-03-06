import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFotosEventosComponent } from './grade-fotos-eventos.component';

describe('GradeFotosEventosComponent', () => {
  let component: GradeFotosEventosComponent;
  let fixture: ComponentFixture<GradeFotosEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeFotosEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeFotosEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
