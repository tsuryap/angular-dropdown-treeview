import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTreeviewComponent } from './select-treeview.component';

describe('SelectTreeviewComponent', () => {
  let component: SelectTreeviewComponent;
  let fixture: ComponentFixture<SelectTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
