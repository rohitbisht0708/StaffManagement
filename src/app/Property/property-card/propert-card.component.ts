import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    // template: ``,
    templateUrl: 'property-card.component.html',
    //styles: ['h1{font-size: normal;}']
    styleUrls:['property-card.component.css']

}
)
export class PropertyCardComponent{

    Property: any = {
        "Id": 1,
        "Name": "Tanishqa Apartments",
        "Type": "House",
        "Price": 12000
    }

}