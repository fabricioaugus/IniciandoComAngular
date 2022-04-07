import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCreatComponent } from './components/product/products-creat/products-creat.component';
import{ HomeComponent } from './views/home/home.component'
import{ ProductsCrudComponent } from './views/products-crud/products-crud.component';
const routes: Routes = [
{
  path: '',
  component: HomeComponent

},
{
  path: 'products', 
  component: ProductsCrudComponent
},
{
path: "products/create",
component: ProductsCreatComponent
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
