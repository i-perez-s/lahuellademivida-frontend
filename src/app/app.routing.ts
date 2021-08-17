import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiffuserComponent } from './components/diffuser/diffuser.component';
import { DiffusersComponent } from './components/diffusers/diffusers.component';
import { KitComponent } from './components/kit/kit.component';
import { KitsComponent } from './components/kits/kits.component';
import { LoginComponent } from './components/login/login.component';
import { OilComponent } from './components/oil/oil.component';
import { OilsComponent } from './components/oils/oils.component';
import { PanelComponent } from './components/panel/panel.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { OilFormComponent } from './components/panelComponents/forms/oil-form/oil-form.component';
import { KitFormComponent } from './components/panelComponents/forms/kit-form/kit-form.component';
import { DiffuserFormComponent } from './components/panelComponents/forms/diffuser-form/diffuser-form.component';

import { ProtectionRoutesGuard } from './protection-routes.guard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'difusor/:id', component: DiffuserComponent},
  {path: 'difusores', component: DiffusersComponent},
  {path: 'kit/:id', component: KitComponent},
  {path: 'kits', component: KitsComponent},
  {path: 'huella', component: LoginComponent},
  {path: 'aceite/:id', component: OilComponent},
  {path: 'aceites', component: OilsComponent},
  {path: 'huellaPanel', component: PanelComponent, canActivate: [ ProtectionRoutesGuard ]},
  {path: 'createOil', component: OilFormComponent, canActivate: [ ProtectionRoutesGuard ]},
  {path: 'createKit', component: KitFormComponent, canActivate: [ ProtectionRoutesGuard ]},
  {path: 'createDiffuser', component: DiffuserFormComponent, canActivate: [ ProtectionRoutesGuard ]},

  {path: 'buscar', component: SearchComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
