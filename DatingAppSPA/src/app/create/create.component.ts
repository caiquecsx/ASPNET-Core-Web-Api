import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name: any;
  password: any;
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    const body: any = {
      username: this.name,
      password: this.password
    };
    this.http.post('https://localhost:44330/api/auth/register', body)
    .subscribe(res => {
      this.response = res;
      alert('User added');
    }, error => {
      alert(error.error);
    });
  }

}
