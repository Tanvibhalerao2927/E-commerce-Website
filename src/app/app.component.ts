import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';  // ✅ Import ApiService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  // ✅ Implement OnInit lifecycle hook

  title = 'ecommerce';
  responseData: any;  // ✅ Variable to store API response

  constructor(private apiService: ApiService) {}  // ✅ Inject ApiService

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getTestData().subscribe(
      (data) => {
        this.responseData = data;
        console.log('API Response:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
