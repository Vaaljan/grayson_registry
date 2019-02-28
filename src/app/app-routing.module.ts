import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { RegistryComponent } from './registry/registry.component';

const routes: Routes = [
  {path:'',component:RegistryComponent},
  { path:'claimlist', component:ClaimListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
