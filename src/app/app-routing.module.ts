import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormReactiveComponent } from './pages/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './pages/form-template/form-template.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'form-template',
    component: FormTemplateComponent
  },
  {
    path:'form-reactive',
    component: FormReactiveComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
