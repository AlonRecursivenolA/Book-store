import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShop } from './book-shop';

describe('BookShop', () => {
  let component: BookShop;
  let fixture: ComponentFixture<BookShop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookShop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookShop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
