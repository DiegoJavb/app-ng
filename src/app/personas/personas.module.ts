import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { PersonasComponent } from "../personas/personas.component";
// import { PersonaComponent } from "../persona/persona.component";

@NgModule({
    declarations: [
        // PersonasComponent, PersonaComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [PersonasComponent]

})
export class PersonaModule { }