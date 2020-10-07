import { Component, AfterViewInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
            '#790149',
            '#005Fcc',
            '#00EBC1',
            '#A700FC',
            '#FF6E3A',
            '#FFDC3D',
            '#00B408',
            '#003D30'
            ],
        }
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: []
    };

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) =>  {
      for (let i = 0; i < res.length; i++) {
        this.dataSource.datasets[0].data[i] = res[i].budget;
        this.dataSource.labels[i] = res[i].title;
        this.createChart();
      }
    });
  }

  createChart(): void {
    const ctx = document.getElementById('myChart');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
}

}
