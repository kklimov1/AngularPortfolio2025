import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkComponent } from './spark.component';

describe('SparkComponent', () => {
  let component: SparkComponent;
  let fixture: ComponentFixture<SparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
