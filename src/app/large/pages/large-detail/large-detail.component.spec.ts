import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeDetailComponent } from './large-detail.component';

describe('LargeDetailComponent', () => {
  let component: LargeDetailComponent;
  let fixture: ComponentFixture<LargeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
