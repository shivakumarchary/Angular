import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterwalletComponent } from './registerwallet.component';

describe('RegisterwalletComponent', () => {
  let component: RegisterwalletComponent;
  let fixture: ComponentFixture<RegisterwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterwalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
