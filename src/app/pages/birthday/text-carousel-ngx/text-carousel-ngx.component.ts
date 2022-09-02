import { Component, OnInit } from '@angular/core';
import {OwlOptions, SlidesOutputData} from "ngx-owl-carousel-o";
import {PhotoService, Product} from "../../../services/photo.service";
import {NgxNumToWordsService, SUPPORTED_LANGUAGE} from "ngx-num-to-words";

@Component({
  selector: 'app-text-carousel-ngx',
  templateUrl: './text-carousel-ngx.component.html',
  styleUrls: ['./text-carousel-ngx.component.scss']
})
export class TextCarouselNGXComponent implements OnInit {
  activeSlides: SlidesOutputData | undefined;
  customOptions: OwlOptions;
  slidesStore = [
    {
      id: '1',
      src:'https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/pass/Gear-Photos-597589287.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id: '2',
      src:'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id: '3',
      src:'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id: '4',
      src:'https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg',
      alt:'Image_4',
      title:'Image_4'
    },
    {
      id: '5',
      src:'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsYW5jZXxlbnwwfHwwfHw%3D&w=1000&q=80',
      alt:'Image_5',
      title:'Image_5'
    }
  ]


  products: Product[] = [];

  numberInWords!: string;
  // @ts-ignore
  lang!: SUPPORTED_LANGUAGE = 'en';
  value = 123;

  constructor(private photoService: PhotoService, public ngxNumToWordsService: NgxNumToWordsService) {
    this.customOptions = {
      loop: true,
      autoplay: true,
      mouseDrag: true,
      autoplayHoverPause: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      center: false,
      stagePadding: 0,
      autoHeight: false,
      autoWidth: false,

      items: 0,
      nav: true
    }
  }

  ngOnInit(): void {
    this.photoService.getProductsSmall().then(products => {
      this.products = products;
    });
  }

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;

  }

  startDragging(event: any){
    // console.log(event);
  }

  getData(data: SlidesOutputData) {
    // console.log(data);
  }

  getAvatar(product: Product) {
    return "/assets/img/avatars/"+product.image;
  }

}
