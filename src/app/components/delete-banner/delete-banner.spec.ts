import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBanner } from './delete-banner';

describe('DeleteBanner', () => {
  let component: DeleteBanner;
  let fixture: ComponentFixture<DeleteBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
