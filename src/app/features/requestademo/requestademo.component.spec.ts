import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestademoComponent } from './requestademo.component';

describe('RequestademoComponent', () => {
  let component: RequestademoComponent;
  let fixture: ComponentFixture<RequestademoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestademoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestademoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
