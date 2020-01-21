import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  url: string = "http://localhost:9090/students";
  rollNumber: number;
  result:any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  findStudent(): void {
    let temp = this.url + "/" + this.rollNumber;
    this.http.get(temp).subscribe(
      data => {this.result=data}
    );
    // alert(temp);
  }

}
