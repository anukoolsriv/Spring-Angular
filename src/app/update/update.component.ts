import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  url: string = "http://localhost:9090/students";

  updateForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      rollNumber:[''],
      studentName:[''],
      studentScore:['']
    });
  }

  updateStudent():void{
    let temp = this.url + "/update";
    this.http.post(temp, this.updateForm.value).subscribe(
      data => alert("updated")
    );
  }

}
