import {Component} from '@angular/core';
import {UIChart} from "primeng/primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data:any;

  update(chart:UIChart) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [1165, 9, 0, 0, 1, 1, 1]
        }
      ]
    }

    //chart.refresh(); //doesn;t work

    setTimeout(() => {
      //chart.refresh(); //doesn;t work

      //chart.ngOnDestroy(); //Works Ok
      //chart.initChart();

      chart.reinit(); //Works Ok
      
    }, 100);
  }

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
  }
}
