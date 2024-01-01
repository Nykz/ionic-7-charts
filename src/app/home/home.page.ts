import { Component, HostListener } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { VerticalBarChartComponent } from '../components/vertical-bar-chart/vertical-bar-chart.component';
import { Platform } from '@ionic/angular';
import { LegendPosition } from '@swimlane/ngx-charts';
import { NgClass } from '@angular/common';
import { GroupedVerticalBarChartComponent } from '../components/grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { LineChartComponent } from '../components/line-chart/line-chart.component';
import { HorizontalBarChartComponent } from '../components/horizontal-bar-chart/horizontal-bar-chart.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardTitle,
    IonCardContent,
    NgClass,
    VerticalBarChartComponent,
    GroupedVerticalBarChartComponent,
    PieChartComponent,
    LineChartComponent,
    HorizontalBarChartComponent
  ],
})
export class HomePage {
  view: any;
  legendPosition!: LegendPosition;
  below: boolean = false;

  constructor(private platform: Platform) {}

  ngOnInit() {
    // this.changeLegendPostion(false);
    this.handleScreenSizeChange();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleScreenSizeChange();
  }

  changeLegendPostion(defaultValue = true) {
    this.legendPosition = defaultValue ? LegendPosition.Right : LegendPosition.Below;
    this.below = !defaultValue;
  }

  handleScreenSizeChange() {
    const width = this.platform.width();
    const height = this.platform.height();
    console.log(width, height);
    if (width > height) {
      this.changeLegendPostion();
      this.view = [0.9 * width, 0.9 * height];
    } else {
      this.changeLegendPostion(false);
      this.view = [0.95 * width, 0.35 * height];
    }
  }
}


    // links
    // https://swimlane.github.io/ngx-charts/#/ngx-charts/pie-chart
    // https://swimlane.gitbook.io/ngx-charts/examples
