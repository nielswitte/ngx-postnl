import { Component, OnInit } from '@angular/core';
import { LocationsService } from './services/locations.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

    public constructor(
        private readonly _locationsService: LocationsService
    ) { }

    public ngOnInit(): void {
        // this.getNearestLocationsByZipCode('7627 PX', 'NL').subscribe();
    }

    public getNearestLocationsByZipCode(postalCode: string, iso2CountryCode: string = 'NL'): Observable<any> {
        return this._locationsService.getNearestLocationsByPostalCode(postalCode, iso2CountryCode);
    }
}
