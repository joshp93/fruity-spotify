import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

const routes: Routes = [
  { path: "", component: GetStartedComponent },
  { path: "auth", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
