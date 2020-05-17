import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { RankedList } from '../entity/ranked-list';
import { ConfigService } from 'src/app/services/config.service';
import { DataChart } from '../entity/data-chart';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  
  rankedList: Array<RankedList> = [];
  stars: Array<object> = [
    {id: 1, notColored: 'star_border', colored: 'star'},
    {id: 2, notColored: 'star_border', colored: 'star'},
    {id: 3, notColored: 'star_border', colored: 'star'},
    {id: 4, notColored: 'star_border', colored: 'star'},
    {id: 5, notColored: 'star_border', colored: 'star'},
  ];
  ratingToChart: Array<number> = [];
  categories: Array<Date> = [];
  dataChartName: string = "Rating";
  rankedListToShow: Array<RankedList> = [];

  constructor(private chartsService: ChartsService, 
    private spinner: NgxSpinnerService, 
    private configService: ConfigService) { }

  ngOnInit() {
    this.setUpRankedList();
    this.setUpChartData();
  }

  setUpChartData() {
    this.chartsService.getDataToChart().subscribe(item => {
      this.ratingToChart = this.setUpRatingChart(item);
      this.categories = this.setUpDateChart(item);
    }, error => {
      console.log(error.error.message);
    })
  }
  setUpRatingChart(item: Array<DataChart>) {
    let arr: Array<number> = [];
    item.forEach(item => {
      arr.push(item.rating);
    })

    return arr;
  }

  setUpDateChart(item: Array<DataChart>) {
    let arr: Array<Date> = [];
    item.forEach(item => {
      arr.push(item.date);
    })

    return arr;
  }

  setUpRankedList() {
    this.spinner.show();
    this.chartsService.rankedList().subscribe(item => {
      this.spinner.hide();
      this.rankedList = item;
      this.rankedListToShow = this.rankedList.slice(0, 3);
    }, error => {
      this.spinner.hide();
      this.configService.showSnackBar(error.error.message);
    })
  }

  paginator(event) {
    this.rankedListToShow = this.rankedList.slice(3 * event.pageIndex, 3 * event.pageIndex + 3);
  }

}
