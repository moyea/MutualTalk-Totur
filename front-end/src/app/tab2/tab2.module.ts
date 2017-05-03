import { NgModule } from '@angular/core';

import { Tab2Component } from './tab2.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {tab2routes} from "./tab2-routing.module";

@NgModule({
    imports: [CommonModule,RouterModule.forChild(tab2routes)],
    exports: [],
    declarations: [Tab2Component],
    providers: [],
})
export class Tab2Module { }
