import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportPage } from './report.page';
const routes: Routes = [
    {
        path: 'tabs',
        component: ReportPage,
        children: [
            {
                path: 'summary', children: [
                {
                    path: '',
                    loadChildren: './summary/summary.module#SummaryPageModule'
                }
            ]
            },
            {
                path: 'positive', children: [
                    {
                        path: '',
                        loadChildren: './positive/positive.module#PositivePageModule'
                    }
                ]
            },
            {
                path: 'negative', children: [
                {
                    path: '',
                    loadChildren: './negative/negative.module#NegativePageModule'
                }
            ]
            },

            {
                path: 'no', children: [
                {
                    path: '',
                    loadChildren: './nocontacts/nocontacts.module#NocontactsPageModule'
                }
            ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/report/tabs/summary',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule {}
