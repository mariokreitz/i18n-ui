import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCard } from './code-card';

describe('CodeCard', () => {
  let component: CodeCard;
  let fixture: ComponentFixture<CodeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
