import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionpageComponent } from './opinionpage.component';

describe('OpinionpageComponent', () => {
  let component: OpinionpageComponent;
  let fixture: ComponentFixture<OpinionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpinionpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpinionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
