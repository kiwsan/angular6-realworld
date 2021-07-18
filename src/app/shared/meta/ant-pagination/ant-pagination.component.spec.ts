import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntPaginationComponent } from './ant-pagination.component';

describe('AntPaginationComponent', () => {
  let component: AntPaginationComponent;
  let fixture: ComponentFixture<AntPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
