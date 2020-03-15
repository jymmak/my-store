import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product.component';
import { ExpotencialPipe } from './pipe/expotencial.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContacComponent } from './contac/contac.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ExpotencialPipe,
    HighlightDirective,
    HomeComponent,
    ProductsComponent,
    ContacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
