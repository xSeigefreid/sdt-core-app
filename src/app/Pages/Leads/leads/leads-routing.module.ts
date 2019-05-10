import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { LeadsPage } from './leads.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: LeadsPage,
        children: [
            {
                path: 'upcoming', children: [
                {
                    path: '',
                    loadChildren: '../upcoming-list/upcoming-list.module#UpcomingListPageModule'
                }
            ]
            },
            {
                path: 'leads', children: [
                    {
                        path: '',
                        loadChildren: '../leads-list/leads-list.module#LeadsListPageModule'
                    }
                ]
            },
            {
                path: 'lapsed', children: [
                {
                    path: '',
                    loadChildren: '../lapsed-list/lapsed-list.module#LapsedListPageModule'
                }
            ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/leads/tabs/leads',
        pathMatch: 'full'
    },
  { path: 'leads-info', loadChildren: '../../../Pages/Leads/leads/leads-info/leads-info.module#LeadsInfoPageModule' }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeadsRoutingModule {}
