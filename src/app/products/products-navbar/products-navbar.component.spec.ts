import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNavbarComponent } from './products-navbar.component';

describe('ProductsNavbarComponent', () => {
  let component: ProductsNavbarComponent;
  let fixture: ComponentFixture<ProductsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
