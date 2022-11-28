import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {path:"config",component : ConfigComponent},
  {path:"client",component : ClientComponent},
{path:"admin",component : AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
