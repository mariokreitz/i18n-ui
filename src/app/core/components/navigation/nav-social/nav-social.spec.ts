import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSocial } from './nav-social';

describe('NavSocial', () => {
  let component: NavSocial;
  let fixture: ComponentFixture<NavSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSocial],
    }).compileComponents();

    fixture = TestBed.createComponent(NavSocial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
