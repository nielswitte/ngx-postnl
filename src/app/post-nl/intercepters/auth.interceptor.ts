import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
    } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostNlService } from '../services/post-nl.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    public constructor(
        private readonly _postNlService: PostNlService
    ) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the api key from the service.
        const apiKey = this._postNlService.getApiKey();

        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = request.clone({
            setHeaders: { apikey: apiKey }
        });

        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}
