import { NgModule } from "@angular/core";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppComponent,
        routingComponents
    ],
    providers: [],
    bootstrap: []
})
export class AppModule {}