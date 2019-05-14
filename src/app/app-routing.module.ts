import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './Pages/Authentication/login/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'leads', loadChildren: './Pages/Leads/leads/leads.module#LeadsPageModule', canLoad: [LoginGuard] },
  { path: 'calendar', loadChildren: './Pages/Calendar/calendar/calendar.module#CalendarPageModule', canLoad: [LoginGuard] },
  { path: 'report', loadChildren: './Pages/Reports/report/report.module#ReportPageModule', canLoad: [LoginGuard] },
  { path: 'login', loadChildren: './Pages/Authentication/login/login.module#LoginPageModule'},
  { path: 'display', loadChildren: './Pages/Profile/display/display.module#DisplayPageModule', canLoad: [LoginGuard] },

  // to be removed
  { path: 'leads-list', loadChildren: './Pages/Leads/leads-list/leads-list.module#LeadsListPageModule', canLoad: [LoginGuard] },
  { path: 'lapsed-list', loadChildren: './Pages/Leads/lapsed-list/lapsed-list.module#LapsedListPageModule', canLoad: [LoginGuard] },
  { path: 'upcoming-list', loadChildren: './Pages/Leads/upcoming-list/upcoming-list.module#UpcomingListPageModule', canLoad: [LoginGuard] },
  // { path: 'edit-form', loadChildren: './Pages/Leads/edit-form/edit-form.module#EditFormPageModule' },
  { path: 'edit-form', loadChildren: './Pages/Profile/edit-form/edit-form.module#EditFormPageModule', canLoad: [LoginGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
