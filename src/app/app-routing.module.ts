import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookcontainerComponent } from './components/bookcontainer/bookcontainer.component';
import { QuickviewComponent } from './components/quickview/quickview.component';

const routes: Routes = [
//   {
//   path: '',component:SigninComponent
// },
// {
//   path: 'signup', component:SignupComponent
// },
// {
//   path: 'ForgetPassword',component:ForgetPasswordComponent
// },
// {
//   path: 'ResetPassword',component:ResetPasswordComponent
// },
{
  path:'', component:DashboardComponent,  children: [
    {path: '', component:BookcontainerComponent},
    {path:'quickview', component:QuickviewComponent},

   
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
