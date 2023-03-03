import { Component } from '@angular/core';
import { data } from 'src/assets/data';


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
  collections = data
}
