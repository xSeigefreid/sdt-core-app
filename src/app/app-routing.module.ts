import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './Pages/Authentication/login/login.guard';
import { AuthGuard } from './Pages/Authentication/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'leads', loadChildren: './Pages/Leads/leads/leads.module#LeadsPageModule'},
  { path: 'calendar', loadChildren: './Pages/Calendar/calendar/calendar.module#CalendarPageModule'},
  { path: 'report', loadChildren: './Pages/Reports/report/report.module#ReportPageModule'},
  { path: 'login', loadChildren: './Pages/Authentication/login/login.module#LoginPageModule'},
  { path: 'display', loadChildren: './Pages/Profile/display/display.module#DisplayPageModule'},

  // to be removed
  { path: 'leads-list', loadChildren: './Pages/Leads/leads-list/leads-list.module#LeadsListPageModule'},
  { path: 'lapsed-list', loadChildren: './Pages/Leads/lapsed-list/lapsed-list.module#LapsedListPageModule'},
  { path: 'upcoming-list', loadChildren: './Pages/Leads/upcoming-list/upcoming-list.module#UpcomingListPageModule'},
  // { path: 'edit-form', loadChildren: './Pages/Leads/edit-form/edit-form.module#EditFormPageModule' },
  { path: 'edit-form', loadChildren: './Pages/Profile/edit-form/edit-form.module#EditFormPageModule'},
  { path: 'calendar', loadChildren: './Pages/Calendar/calendar/calendar.module#CalendarPageModule' },
  { path: 'report', loadChildren: './Pages/Reports/report/report.module#ReportPageModule' },
  { path: 'login', loadChildren: './Pages/Authentication/login/login.module#LoginPageModule' },

  // to be removed
  { path: 'edit-form', loadChildren: './Pages/Leads/edit-form/edit-form.module#EditFormPageModule' },
  { path: 'display', loadChildren: './Pages/Profile/display/display.module#DisplayPageModule' },
  { path: 'leads-info', loadChildren: './Pages/Leads/leads-list/leads-info/leads-info.module#LeadsInfoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
