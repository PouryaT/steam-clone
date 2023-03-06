import { Component, OnInit } from '@angular/core';
import { sidebarService } from './sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebar:sidebarService) { }

  ngOnInit(): void {
  }
  Clicked(){
    this.sidebar.clicked.next(true);
  }

}
