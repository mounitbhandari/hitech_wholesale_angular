import { Component, OnInit } from '@angular/core';
import {PhotoService, Product} from "../../../services/photo.service";

@Component({
  selector: 'app-text-carousel',
  templateUrl: './text-carousel.component.html',
  styleUrls: ['./text-carousel.component.scss']
})
export class TextCarouselComponent implements OnInit {
 responsiveOptions: ({ numScroll: number; numVisible: number; breakpoint: string } | { numScroll: number; numVisible: number; breakpoint: string } | { numScroll: number; numVisible: number; breakpoint: string })[];
  products: Product[] =[];
  constructor(private photoService: PhotoService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.photoService.getProductsSmall().then(products => {
      this.products = products;
    });
  }


  getAvatar(product: Product) {
    return "/assets/img/avatars/"+product.image;
  }
}
