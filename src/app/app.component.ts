import { Component } from '@angular/core';
import { HttpClient  }  from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-select-treeview';
  treeData;
  selectedNode;
  constructor(private _http: HttpClient) {
    this._http.get('http://localhost:4200/mocks/treeData.json').subscribe((res: any) => {
      this.treeData = res.data;
    });

  }

 
}
