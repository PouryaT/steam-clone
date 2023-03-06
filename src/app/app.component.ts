import { Component } from '@angular/core';
import { sidebarService } from './header/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isOpen=false;
  ishtml=false;
  title = 'Last-Train1401';
  constructor(private sidebarService : sidebarService){
    this.sidebarService.clicked.subscribe(x=>{
      this.isOpen = x;
    });
  }
  isClose(){
    if(this.ishtml==true){
      this.sidebarService.clicked.next(false);
      this.ishtml=false;
    }
    else if (this.ishtml==false){
      this.ishtml=true;
    }
  }
}
