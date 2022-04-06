import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCreatComponent } from './products-creat.component';

describe('ProductsCreatComponent', () => {
  let component: ProductsCreatComponent;
  let fixture: ComponentFixture<ProductsCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
