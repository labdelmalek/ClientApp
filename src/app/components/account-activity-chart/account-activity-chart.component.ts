import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-activity-chart',
  templateUrl: './account-activity-chart.component.html',
  styleUrls: ['./account-activity-chart.component.css']
})
export class AccountActivityChartComponent implements OnInit {

 
  @Input()  values :Array<number>;
  @Input() dates :Array<string>
  public barChartOptions={
    scaleShowVerticalLines: false,
    responsive : true
  };
  public barChartLabels ;
  public barChartType= 'line';
  public barChartLegend =true;
  public barChartData= [
    {data :[], label:'',fill : false,lineTension: 0.4,borderColor: "#75c7f0"}
  ];
  constructor() { }

  ngOnInit(): void {
    

      this.barChartData[0].data=this.values;
      this.barChartLabels=this.dates;
      this.barChartData[0].label="Track Spending";
  
 
  }

  

}
