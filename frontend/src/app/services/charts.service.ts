import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RankedList } from '../components/entity/ranked-list';
import { DataChart } from '../components/entity/data-chart';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  public rankedList() {
    return this.http.get<Array<RankedList>>(environment.url + 'api/rankedList');
  }

  public getDataToChart() {
    return this.http.get<Array<DataChart>>(environment.url + 'api/getDataToChart');
  }
}
