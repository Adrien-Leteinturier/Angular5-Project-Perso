import { OfficeComponent } from './office/office.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes = [

    {
        path: 'home', loadChildren: () => import('./home/home.module').then(m => m.homeModule)
    },
    {
        path: 'login',  loadChildren: () => import('./office/office.module').then(m => m.officeModule)
    }

];