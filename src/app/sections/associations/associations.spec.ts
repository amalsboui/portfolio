import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Associations } from './associations';

describe('Associations', () => {
  let component: Associations;
  let fixture: ComponentFixture<Associations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Associations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Associations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
