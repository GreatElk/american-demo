import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ReportsComponent } from './reports/reports.component';
import { ClientComponent } from './client/client.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AdminComponent } from '../../admin/admin.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models/role';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'client', component: ClientComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User][Role.Admin]},
},
    { path: 'transactions', component: TransactionsComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User][Role.Admin]},
},
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
 },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
