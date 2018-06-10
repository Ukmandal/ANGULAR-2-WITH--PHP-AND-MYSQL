import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './employees/navbar/navbar.component';
import { EditComponent } from './employees/edit/edit.component';
import { ShowComponent } from './employees/show/show.component';
import { HeaderComponent } from './employees/header-footer/header/header.component';
import { FooterComponent } from './employees/header-footer/footer/footer.component';
import { EmpService } from './employees/shared/emp.service';
import { ListComponent } from './employees/list/list.component';
import { WelcomeComponent } from './employees/welcome/welcome.component';
import { ContactComponent } from './employees/contact/contact.component';
import { SettingComponent } from './employees/settings/setting.component';
import { RegisterComponent } from './employees/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    RegisterComponent,
    EditComponent,
    ShowComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ContactComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
