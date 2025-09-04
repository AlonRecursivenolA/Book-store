import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopContainer } from './cart-container';

describe('ShopContainer', () => {
  let component: ShopContainer;
  let fixture: ComponentFixture<ShopContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
