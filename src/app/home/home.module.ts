import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './componentes/banner/banner.component';
import { HomeComponent } from './componentes/home/home.component';
import { HomeRoutingModule } from './home-routing';


@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
