import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LocationsModule } from './locations/locations.module';
import { NgModule } from '@angular/core';
import { PostNlModule } from './post-nl/post-nl.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LocationsModule,
        PostNlModule.forRoot({
            apiKey: 'api-key'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
