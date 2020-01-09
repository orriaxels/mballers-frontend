import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TableComponent } from "../app/components/table/table.component";
import { PlayersDetailComponent } from './components/players-detail/players-detail.component';

const routes: Routes = [
  //{ path: 'api/table', component: TableComponent}
  {path: "", redirectTo: 'table', pathMatch: 'full'},
  {path: "table", component: TableComponent},
  {path: "players/:id", component: PlayersDetailComponent}
];

@NgModule({
  declarations: [],  
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
