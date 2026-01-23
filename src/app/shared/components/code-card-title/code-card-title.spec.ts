import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCardTitle } from './code-card-title';

describe('CodeCardTitle', () => {
  let component: CodeCardTitle;
  let fixture: ComponentFixture<CodeCardTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeCardTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeCardTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
