import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  ngOnInit(): void {
      
  }
  data = [
    { name: '2017', value: 10 },
    { name: '2018', value: 11 },
  ]

  series = [
    {
      "name": "New Zealand",
      "series": [
        {
          "value": 2720,
          "name": "2016-09-21T20:46:06.473Z"
        },
        {
          "value": 5928,
          "name": "2016-09-23T03:57:30.183Z"
        },
        {
          "value": 6410,
          "name": "2016-09-22T17:59:22.921Z"
        },
        {
          "value": 4938,
          "name": "2016-09-15T05:05:42.136Z"
        },
        {
          "value": 6462,
          "name": "2016-09-18T03:57:09.216Z"
        }
      ]
    },
  ]
}
