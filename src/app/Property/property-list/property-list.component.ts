import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  Sellrent = 1;
  Properties: Array<IProperty>;

  constructor(private route:ActivatedRoute, private housingService:HousingService){

  }
  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
       this.Sellrent = 2; // means we are on the rent property
    }
  this.housingService.getAllProperties(this.Sellrent).subscribe(
    data => {
      this.Properties = data
      console.log(this.route.snapshot.url.toString())
    }, error =>{
      console.log(error)
    }
   );
  }
}
