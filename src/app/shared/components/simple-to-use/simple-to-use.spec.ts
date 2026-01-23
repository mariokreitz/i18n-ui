import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleToUse } from './simple-to-use';

describe('SimpleToUse', () => {
  let component: SimpleToUse;
  let fixture: ComponentFixture<SimpleToUse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleToUse],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleToUse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
