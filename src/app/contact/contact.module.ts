import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact.routing';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        ContactRoutingModule
    ]
})
export class ContactModule { }
