import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '대시보드'
    },
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: '대시보드 메인'
        }
      },
      {
        path: 'product',
        component: ProductComponent,
        data: {
          title: '상품 메인'
        }
      },
      {
        path: 'product/list',
        component: ProductListComponent,
        data: {
          title: '상품 리스트'
        }
      },
      {
        path: 'product/create',
        component: ProductCreateComponent,
        data: {
          title: '상품 등록'
        }
      },
      {
        path: 'product/detail/:productId',
        component: ProductDetailComponent,
        data: {
          title: '상품 상세'
        }
      },
      {
        path: 'product/edit/:productId',
        component: ProductEditComponent,
        data: {
          title: '상품 수정'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
