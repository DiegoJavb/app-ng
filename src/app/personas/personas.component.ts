import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
    deshabilitar = false;
    mensaje = 'No se ha creado ninguan persona';
    titulo = 'Ingeniero';
    mostrar = false;
    listadoPersonas = [];
    crearPersona() {
        this.mostrar = true;
        this.mensaje = 'Se ha creado una persona';
    }
    // El codigo siguiente corresponde a (event biding), pero dejó de ser necesario al 
    // utilizar 2way-biding
    // modificarTitulo(event: Event) {
    //     this.titulo = (event.target as HTMLInputElement).value;
    // }
}