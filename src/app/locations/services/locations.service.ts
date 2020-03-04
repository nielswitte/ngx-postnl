import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostNlService } from 'src/app/post-nl/services/post-nl.service';

@Injectable({
    providedIn: 'root'
})
export class LocationsService {

    public constructor(
        private readonly _httpClient: HttpClient,
        private readonly _postNlService: PostNlService
    ) { }

    public getNearestLocationsByPostalCode(postalCode: string, iso2CountryCode: string = 'NL'): Observable<any> {
        const url = new URL('/shipment/v2_1/locations/nearest', this._postNlService.getBaseUrl());

        url.searchParams.set('PostalCode', postalCode.toUpperCase());
        url.searchParams.set('CountryCode', iso2CountryCode.toUpperCase());

        return this._httpClient.get(url.toString());
    }
}
