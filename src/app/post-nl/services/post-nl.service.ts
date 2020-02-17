import { Inject, Injectable } from '@angular/core';
import { postNlConfigService } from '../injection-tokens/post-nl-config-service';

@Injectable({
    providedIn: 'root'
})
export class PostNlService {

    public constructor(@Inject(postNlConfigService) private readonly PostNlConfig) { }



}
