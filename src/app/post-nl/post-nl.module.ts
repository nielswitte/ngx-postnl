import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './intercepters/interceptors';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PostNlConfig } from './models/post-nl.config';
import { postNlConfigService } from './injection-tokens/post-nl-config-service';
import { PostNlService } from './services/post-nl.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class PostNlModule  {
    public static forRoot(config: PostNlConfig): ModuleWithProviders {
        return {
            ngModule: PostNlModule,
            providers: [
                httpInterceptorProviders,
                {
                    provide: postNlConfigService,
                    useValue: config
                },
                PostNlService
            ]
        };
    }
}
