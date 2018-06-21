import { Component, OnInit, ViewChild } from '@angular/core';
//import data service to component
import { Order, OrdersService } from 'app/orders.service'; 
import { locale, loadMessages } from 'devextreme/localization';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  providers: [OrdersService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild(DxDataGridComponent) grid: DxDataGridComponent;
  orders: Order[];

  updateLocale(currentLocale) {
    locale(currentLocale);
    this.grid.instance.refresh();
  }

  constructor(private ordersData: OrdersService) {}

  ngOnInit() {
    //get data from orders service
    this.orders = this.ordersData.getOrders(); 
  }
}
