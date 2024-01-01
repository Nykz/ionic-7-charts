import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grouped-vertical-bar-chart',
  templateUrl: './grouped-vertical-bar-chart.component.html',
  styleUrls: ['./grouped-vertical-bar-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule],
})
export class GroupedVerticalBarChartComponent implements OnInit {

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';
  @Input() view: any;
  @Input() legendPosition = LegendPosition.Right;

  colorScheme: any = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
  };

  multi: any[] = [];

  constructor() {}

  ngOnInit() {
    this.multi = [
      {
        name: 'Germany',
        series: [
          {
            name: '2010',
            value: 7300000,
          },
          {
            name: '2011',
            value: 8940000,
          },
        ],
      },

      {
        name: 'USA',
        series: [
          {
            name: '2010',
            value: 7870000,
          },
          {
            name: '2011',
            value: 8270000,
          },
        ],
      },

      {
        name: 'France',
        series: [
          {
            name: '2010',
            value: 5000002,
          },
          {
            name: '2011',
            value: 5800000,
          },
        ],
      },
    ];
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
