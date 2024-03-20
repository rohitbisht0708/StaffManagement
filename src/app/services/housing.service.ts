import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProperty } from '../Property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties() : Observable<IProperty[]>{
   return this.http.get('Data/properties.json').pipe(
    map(data => {
      const propertiesArray: Array<IProperty> = [];
      for(const id in data){
        if(data.hasOwnProperty(id)){
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
    })
   );
  }
}
