import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { DescriptionComponent } from './description/description.component';
import { ExiptionComponent } from './home/exiption/exiption.component';
import { HomeComponent } from './home/home.component';
import { LatestComponent } from './home/latest/latest.component';
=======
>>>>>>> a68ddc284438719d03b118722a68d2a6ae8fc9cc
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
<<<<<<< HEAD
  {path:'visit',component:ExiptionComponent},
  {path:'whats',component:ExiptionComponent},
  {path:'contact',component:ExiptionComponent},
  {path:'veiw',component:DescriptionComponent},
=======
  // {path:'visit',component:LatestComponent},
  // {path:'whats',component:LatestComponent},
  // {path:'contact',component:LatestComponent},
>>>>>>> a68ddc284438719d03b118722a68d2a6ae8fc9cc
  {
    path:'',
    loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
