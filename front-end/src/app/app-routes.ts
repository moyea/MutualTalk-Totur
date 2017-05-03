import {RouterModule, Routes} from "@angular/router";
import {TabComponent} from "./tab/tab.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'tab-1', component: TabComponent},
  {path: 'tab-2', loadChildren: "app/tab2/tab2.module#Tab2Module"},
  {path: 'tab-3', loadChildren: 'app/tab3/tab3.module#Tab3Module'}
];

@NgModule({
  declarations: [
    TabComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {

}
