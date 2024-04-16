import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRankingsComponent } from './my-rankings.component';

describe('MyRankingsComponent', () => {
  let component: MyRankingsComponent;
  let fixture: ComponentFixture<MyRankingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRankingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
