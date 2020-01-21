import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  url: string = "http://localhost:9090/students";

  addForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      rollNumber :[''],
      studentName :[''],
      studentScore:['']
    });
  }

  addStudent(): void {
    // alert('aa le lo la');
    this.http.post(this.url, this.addForm.value).subscribe(data => {
      alert('Student is added');
    });
  }
}
