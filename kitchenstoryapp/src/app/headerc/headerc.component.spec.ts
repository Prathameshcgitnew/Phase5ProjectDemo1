import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercComponent } from './headerc.component';

describe('HeadercComponent', () => {
  let component: HeadercComponent;
  let fixture: ComponentFixture<HeadercComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadercComponent]
    });
    fixture = TestBed.createComponent(HeadercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
