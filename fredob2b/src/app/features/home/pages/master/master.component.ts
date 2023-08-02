import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent {
  isCollapsed = false;
  Highcharts: typeof Highcharts = Highcharts;
  Highcharts2: typeof Highcharts = Highcharts;
  Highcharts3: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
      series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  chartOptions2: Highcharts.Options = {
    title: {
      text: 'Column Chart',
      align: 'left'
  },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe'],
      title: {
          text: null
      },
      gridLineWidth: 1,
      lineWidth: 0
  },
    yAxis: {
      min: 0,
      title: {
          text: 'Population (millions)',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      },
      gridLineWidth: 0
  },
    tooltip: {
      valueSuffix: ' millions'
  },
  plotOptions: {
      bar: {
          borderRadius: '50%',
          dataLabels: {
              enabled: true
          },
          groupPadding: 0.1
      }
  },
    series: [{
      type: 'column',
      name: 'Year 1990',
      data: [631, 727, 3202, 721]
  }, {
    type: 'column',
      name: 'Year 2000',
      data: [814, 841, 3714, 726]
  }, {
    type: 'column',
      name: 'Year 2018',
      data: [1276, 1007, 4561, 746]
  }]
};

}
