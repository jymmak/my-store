import { NgModule } from '@angular/core';
import { DemoComponent } from './components/demo/demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        DemoRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DemoModule { }
