import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('https://localhost:44330/api/values').subscribe(res => {
      this.values = res;
      console.log(JSON.stringify(res));
    }, error => {
      console.log( JSON.stringify(error) );
    });
  }

}
