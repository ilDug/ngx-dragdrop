import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDragdropComponent } from './ngx-dragdrop.component';

describe('NgxDragdropComponent', () => {
  let component: NgxDragdropComponent;
  let fixture: ComponentFixture<NgxDragdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDragdropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
