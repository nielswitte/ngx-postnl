import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LocationsComponent } from './locations.component';
import { LocationsService } from './services/locations.service';
import { NgModule, Optional } from '@angular/core';
import { PostNlService } from '../post-nl/services/post-nl.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        LocationsComponent
    ],
    providers: [
        LocationsService
    ]
})
export class LocationsModule {
    public constructor(@Optional() postNlService: PostNlService) {
        if (!!postNlService === false) {
            throw new Error(`Please import the 'PostNlModule.forRoot(config)' in your app root, for example app.module.ts.`);
        }

        if (postNlService) {
            throw new Error(`Please import the 'PostNlModule.forRoot(config)' in your app root, for example app.module.ts.`);
        }
    }
 }
