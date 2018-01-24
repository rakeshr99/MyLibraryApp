import { Component } from '@angular/core';
import { DataService } from '../app/services/data.service';
//comment
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'My tiny library App!!';
}
