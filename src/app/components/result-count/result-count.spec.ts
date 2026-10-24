import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultCount } from './result-count';

describe('ResultCount', () => {
  let component: ResultCount;
  let fixture: ComponentFixture<ResultCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultCount],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
