import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { PropertyDetailsComponent } from './Property/property-details/property-details.component';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'property-details/:id', component: PropertyDetailsComponent },
  { path: 'add-property', component: AddPropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
