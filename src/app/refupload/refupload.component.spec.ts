import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuploadComponent } from './refupload.component';

describe('RefuploadComponent', () => {
  let component: RefuploadComponent;
  let fixture: ComponentFixture<RefuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
