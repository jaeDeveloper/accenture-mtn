import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';


const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
