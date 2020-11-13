import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLayoutComponent } from './work-layout.component';

describe('WorkLayoutComponent', () => {
  let component: WorkLayoutComponent;
  let fixture: ComponentFixture<WorkLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
