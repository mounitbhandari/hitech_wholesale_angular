import {Component, HostListener, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {AuthService} from "./services/auth.service";
// @ts-ignore
import {Subscription} from "rxjs/dist/types";
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {CommonService} from "./services/common.service";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {PrimeNGConfig} from "primeng/api";
import {ScrollDispatcher} from "@angular/cdk/overlay";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mediaSub: Subscription;
  isDeviceXs: boolean | undefined;
  isNavigating: boolean=false;
  navFixed = false;
  projectData: any;


  constructor(private scrollDispatcher: ScrollDispatcher
              ,public router: Router
              , public authService: AuthService
              , public mediaObserver: MediaObserver
              , public commonService: CommonService
              , private primengConfig: PrimeNGConfig
  ) {
    //this scroll dispatcher works on scroll
    this.scrollDispatcher.scrolled().subscribe(x => {
      AOS.refresh();
    });
    this.primengConfig.ripple = true;
    AOS.init();
    this.router.events.subscribe(ev=>{
        if(ev instanceof NavigationStart){
          this.isNavigating=true;
        }
        if(ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError){
          this.isNavigating=false;
        }
      }
    );
  }

  ngOnInit(): void {

    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.isDeviceXs = (result.mqAlias === 'xs' ? true : false);
        this.commonService.setDeviceXs(this.isDeviceXs);
      }
    );
    this.authService.autoLogin();
    setTimeout(() => {
      this.sideBarOpen=false;
    }, 3000);
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  title = 'adminDesign';
  sideBarOpen=true;

  sideBarToggler($event: any){
    if(!$event.choice){
      this.sideBarOpen=false;
    }else{
      this.sideBarOpen=!this.sideBarOpen;
    }
  }





}
