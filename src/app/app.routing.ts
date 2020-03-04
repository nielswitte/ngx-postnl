import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AppComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
