import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiagPaginatorComponent } from './ciag-paginator.component';

describe('CiagPaginatorComponent', () => {
  let component: CiagPaginatorComponent;
  let fixture: ComponentFixture<CiagPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiagPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiagPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
