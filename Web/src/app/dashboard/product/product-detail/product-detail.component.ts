import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  productId = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params.productId;
  }

  bntDelete_Click(): void{
    alert('삭제 기능 구현');
  }

  bntEdit_Click(): void{
    this.router.navigate(['/dashboard/product/edit', this.productId]);
  }
}
