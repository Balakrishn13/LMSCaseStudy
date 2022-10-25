import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LmscourseComponent } from './lmscourse/lmscourse.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { SearchcourseComponent } from './searchcourse/searchcourse.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'course',component:LmscourseComponent,canActivate:[AuthGuard]},
  {path:'addcourse',component:AddcourseComponent,canActivate:[AuthGuard]},
  {path:'searchcourse',component:SearchcourseComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
