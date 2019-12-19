import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TableComponent } from "../app/components/table/table.component";

const routes: Routes = [
  { path: 'api/table', component: TableComponent}
];

@NgModule({
  declarations: [],  
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
