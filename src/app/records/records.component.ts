import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  orders = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.orders = data;
    })
  }

}
