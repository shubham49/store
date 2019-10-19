import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './shared/constants/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.HOME,
    pathMatch: 'full'
  },
  {
    path: AppRoutes.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: AppRoutes.LIST,
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: AppRoutes.DETAILS,
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
