import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtricledatatableComponent } from './atricledatatable.component';

describe('AtricledatatableComponent', () => {
  let component: AtricledatatableComponent;
  let fixture: ComponentFixture<AtricledatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtricledatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtricledatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
