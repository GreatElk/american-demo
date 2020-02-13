import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit, AfterViewInit {


  // tslint:disable-next-line:member-ordering
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  // tslint:disable-next-line:member-ordering
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective

  orders = [];
  previous: any = [];
  constructor(private dataService: DataService, private cdRef: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {

this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.orders = data;
    })

    for (let i = 1; i <= 11; i++) {
      this.orders.push({
        id: i,
        first: {nick: 'Nick ' + i, name: 'Name ' + i},
        last: 'Phone ' + i,
        handle: 'Address ' + i
      });

    this.mdbTable.setDataSource(this.orders);
    this.orders = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
    }

    this.ngAfterViewInit(); {
      this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
      this.mdbTablePagination.calculateFirstItemIndex();
      this.mdbTablePagination.calculateLastItemIndex();
      this.cdRef.detectChanges();
    }
  }

}
