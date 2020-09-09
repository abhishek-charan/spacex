import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spacex';

data:Array<any>
constructor(private api: ApiService){
this.data= new Array<any>()

}
getDataFromAPI(){
  this.api.getData().subscribe((data)=>{
    console.log(data)
    this.data=data
  })
}
}
