import { Inject, Injectable } from '@angular/core';
import { PostNlConfig } from '../models/post-nl.config';
import { postNlConfigService } from '../injection-tokens/post-nl-config-service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostNlService {
    public constructor(
        @Inject(postNlConfigService) private readonly postNlConfig: PostNlConfig
    ) { }

    public getApiKey(): string {
        return this.postNlConfig.apiKey;
    }

    public isSandboxMode(): boolean {
        return this.postNlConfig.sandbox === true;
    }

    public getBaseUrl(): string {
        if (this.isSandboxMode()) {
            return 'https://api-sandbox.postnl.nl';
        }

        return 'https://api.postnl.nl';
    }
}
