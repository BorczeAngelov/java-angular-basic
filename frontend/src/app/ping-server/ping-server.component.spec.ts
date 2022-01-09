import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingServerComponent } from './ping-server.component';

describe('PingServerComponent', () => {
  let component: PingServerComponent;
  let fixture: ComponentFixture<PingServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PingServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PingServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
