import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { LocationsModule } from './locations/locations.module';
import { NgModule } from '@angular/core';
import { PostNlModule } from './post-nl/post-nl.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutes,
        BrowserModule,
        LocationsModule,
        PostNlModule.forRoot({
            apiKey: environment.postNl.apiKey
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
