import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PostNlConfig } from './models/post-nl.config';
import { postNlConfigService } from './injection-tokens/post-nl-config-service';
import { PostNlService } from './services/post-nl.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [

    ]
})
export class PostNlModule  {
    public static forRoot(config: PostNlConfig): ModuleWithProviders {
        return {
            ngModule: PostNlModule,
            providers: [
                {
                    provide: postNlConfigService,
                    useValue: config
                },
                PostNlService
            ]
        };
    }
}
