import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsPage } from './leads.page';


const routes: Routes = [
  {
    path: 'leads',
    component: LeadsPage,
    children: [
      {
        path: 'upcoming',
        children: [
          {
            path: '',
            loadChildren: '../upcoming-list/upcoming-list.module#UpcomingListPageModule'
          }
        ]
      },
      {
        path: 'leads',
        children: [
          {
            path: '',
            loadChildren: '../leads-list/leads-list.module#LeadsListPageModule'
          }
        ]
      },
      {
        path: 'lapsed',
        children: [
          {
            path: '',
            loadChildren: '../lapsed-list/lapsed-list.module#LapsedListPageModule'
          }
        ]
      }
      ,
      {
        path: '/leads',
        redirectTo: '/leads/leads-list',
        pathMatch: 'full'
      }
    ]
  }
  ,
  {
    path: '/leads',
    redirectTo: '/leads/leads-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LeadsPageRoutingModule {}
