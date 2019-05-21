import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Pages/Authentication/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'leads', loadChildren: './Pages/Leads/leads/leads.module#LeadsPageModule', canLoad: [AuthGuard] },
  { path: 'calendar', loadChildren: './Pages/Calendar/calendar/calendar.module#CalendarPageModule', canLoad: [AuthGuard] },
  { path: 'report', loadChildren: './Pages/Reports/report/report.module#ReportPageModule', canLoad: [AuthGuard] },
  { path: 'login', loadChildren: './Pages/Authentication/login/login.module#LoginPageModule'},
  { path: 'display', loadChildren: './Pages/Profile/display/display.module#DisplayPageModule', canLoad: [AuthGuard] },

  // to be removed
  { path: 'leads-list', loadChildren: './Pages/Leads/leads-list/leads-list.module#LeadsListPageModule', canLoad: [AuthGuard] },
  { path: 'lapsed-list', loadChildren: './Pages/Leads/lapsed-list/lapsed-list.module#LapsedListPageModule', canLoad: [AuthGuard] },
  { path: 'upcoming-list', loadChildren: './Pages/Leads/upcoming-list/upcoming-list.module#UpcomingListPageModule', canLoad: [AuthGuard] },
  // { path: 'edit-form', loadChildren: './Pages/Leads/edit-form/edit-form.module#EditFormPageModule' },
  { path: 'edit-form', loadChildren: './Pages/Profile/edit-form/edit-form.module#EditFormPageModule', canLoad: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
