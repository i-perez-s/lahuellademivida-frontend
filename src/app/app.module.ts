import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OilsComponent } from './components/oils/oils.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiffuserComponent } from './components/diffuser/diffuser.component';
import { KitComponent } from './components/kit/kit.component';
import { KitsComponent } from './components/kits/kits.component';
import { DiffusersComponent } from './components/diffusers/diffusers.component';
import { OilComponent } from './components/oil/oil.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { ErrorComponent } from './components/error/error.component';
import { FootComponent } from './components/foot/foot.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PostsComponent } from './components/posts/posts.component';
import { SearchComponent } from './components/search/search.component';


import { ProtectionRoutesGuard } from './protection-routes.guard';
import { LoginService } from './services/login-service';
import { ContactMessagesComponent } from './components/panelComponents/contact-messages/contact-messages.component';
import { OilListComponent } from './components/panelComponents/oil-list/oil-list.component';
import { KitListComponent } from './components/panelComponents/kit-list/kit-list.component';
import { DiffuserKitComponent } from './components/panelComponents/diffuser-kit/diffuser-kit.component';
import { OilFormComponent } from './components/panelComponents/forms/oil-form/oil-form.component';
import { DiffuserFormComponent } from './components/panelComponents/forms/diffuser-form/diffuser-form.component';
import { KitFormComponent } from './components/panelComponents/forms/kit-form/kit-form.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OilsComponent,
    ContactComponent,
    DiffuserComponent,
    KitComponent,
    KitsComponent,
    DiffusersComponent,
    OilComponent,
    LoginComponent,
    PanelComponent,
    ErrorComponent,
    FootComponent,
    FilterPipe,
    PostsComponent,
    SearchComponent,
    ContactMessagesComponent,
    OilListComponent,
    KitListComponent,
    DiffuserKitComponent,
    OilFormComponent,
    DiffuserFormComponent,
    KitFormComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [appRoutingProviders, ProtectionRoutesGuard, LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
