import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard';
import { ClientDetailPage } from './pages/client-detail/client-detail';
export const routes: Routes = [
    { path: '', component: DashboardPage },
    {path:'clients/:id',component:ClientDetailPage}];
