import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navBarFixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.navBarFixed = window.scrollY > 50;
  }

  constructor() {
  }

  ngOnInit(): void {

  }

  public goAngular(el: any){
    const element: any = document.querySelector(`.${el.id}`);
    element.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
  }

}
