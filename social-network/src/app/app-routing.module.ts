import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/component/not-found/not-found.component';

const routes: Routes = [
  { path: 'news', loadChildren: () => import('./features/news/news.module').then(m => m.NewsModule) },
  { path: 'popular-images', loadChildren: () => import('./features/popular-images/popular-images.module').then(m => m.PopularImagesModule) },
  { path: 'user-profile', loadChildren: () => import('./features/user-profile/user-profile.module').then(m => m.UserProfileModule) },
  { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },
  { path: "", redirectTo: "/news", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
