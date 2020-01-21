import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  url: string = "http://localhost:9090/students";
  rollNumber :string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  deleteStudent():void{
    let temp = this.url + "/" + this.rollNumber;
    this.http.delete(temp).subscribe(data =>{
      alert('student is deleted');
    });
  }

}
