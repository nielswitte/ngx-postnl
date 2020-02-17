import { InjectionToken } from '@angular/core';
import { PostNlConfig } from '../models/post-nl.config';

export const postNlConfigService: InjectionToken<PostNlConfig> = new InjectionToken('PostNlConfig');
