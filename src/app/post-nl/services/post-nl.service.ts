import { Inject, Injectable } from '@angular/core';
import { PostNlConfig } from '../models/post-nl.config';
import { postNlConfigService } from '../injection-tokens/post-nl-config-service';

@Injectable({
    providedIn: 'root'
})
export class PostNlService {
    public constructor(
        @Inject(postNlConfigService) private readonly _postNlConfig: PostNlConfig
    ) { }

    public getApiKey(): string {
        return this._postNlConfig.apiKey;
    }

    public isSandboxMode(): boolean {
        return this._postNlConfig.sandbox === true;
    }

    public getBaseUrl(): string {
        if (this.isSandboxMode()) {
            return 'https://api-sandbox.postnl.nl';
        }

        return 'https://api.postnl.nl';
    }
}
