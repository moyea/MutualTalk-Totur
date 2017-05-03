import {NgModule} from "@angular/core";
import {Tab3Component} from "./tab3.component";
import {CommonModule} from "@angular/common";
import {Tab3RoutingModule} from "./tab3-routing.module";
import {MaterialModule} from "@angular/material";


@NgModule({
    imports: [CommonModule,Tab3RoutingModule,MaterialModule.forRoot()],
    declarations: [Tab3Component],
    providers: [],
})
export class Tab3Module { }
