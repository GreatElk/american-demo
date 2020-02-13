import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {PageEvent} from '@angular/material/paginator';

/**
 * @title Configurable paginator
 */

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  orders = [];

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

constructor(private dataService: DataService) { }

  ngOnInit() {

this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.orders = data;
    })

// an example array of 150 items to be paged
      this.orders = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Order ${i + 1}`}));

  }



}

