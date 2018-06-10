import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './employees/edit/edit.component';
import { ShowComponent } from './employees/show/show.component';
import { ListComponent } from './employees/list/list.component';
import { WelcomeComponent } from './employees/welcome/welcome.component';
import { ContactComponent } from './employees/contact/contact.component';
import { SettingComponent } from './employees/settings/setting.component';
import { RegisterComponent } from './employees/register/register.component';

const routes: Routes = [
  {path:"", redirectTo:"welcome", pathMatch:"full"},
  {path:"list", component: ListComponent},
  {path:"welcome", component: WelcomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"setting", component:SettingComponent},
  {path:"register", component:RegisterComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"show/:id", component:ShowComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
