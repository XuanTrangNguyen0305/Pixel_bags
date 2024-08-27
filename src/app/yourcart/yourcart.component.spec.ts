import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourcartComponent } from './yourcart.component';

describe('YourcartComponent', () => {
  let component: YourcartComponent;
  let fixture: ComponentFixture<YourcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourcartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
