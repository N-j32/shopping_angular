import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';
import { CategoriesComponent } from './categories/categories.component';
import { CardsComponent } from './cards/cards.component';
import { PerfumeComponent } from './perfume/perfume.component';
import { HdecoreComponent } from './hdecore/hdecore.component';
import { RegisterComponent } from './register/register.component';
import { HomedecoreComponent } from './homedecore/homedecore.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent},
    {
      path:'link',component:LinkComponent},
      {
        path:'user',component:UserComponent},
        {
          path:'categories',component:CategoriesComponent},
          {
            path: 'cards',component:CardsComponent
          },
          {
            path:'perfume',component:PerfumeComponent
          },
          {
            path:'homedecore',component:HomedecoreComponent
          },
          {
            path:'register',component:RegisterComponent
          }
          
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
