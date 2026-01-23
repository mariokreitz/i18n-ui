import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCardBody } from './code-card-body';

describe('CodeCardBody', () => {
  let component: CodeCardBody;
  let fixture: ComponentFixture<CodeCardBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeCardBody],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeCardBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
