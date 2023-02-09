import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScategoeiesComponent } from './scategoeies.component';

describe('ScategoeiesComponent', () => {
  let component: ScategoeiesComponent;
  let fixture: ComponentFixture<ScategoeiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScategoeiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScategoeiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
