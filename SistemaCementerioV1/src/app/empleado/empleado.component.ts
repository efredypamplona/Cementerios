/* import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent {

  nombre = "efredy";
  empresaValor = "";

  @ViewChild('empresaInput') empresaInput!: ElementRef<HTMLInputElement>;

  llamaempresa() {
    this.empresaValor = this.empresaInput.nativeElement.value;
    console.log("Empresa ingresada:", this.empresaValor); // Para verificar
  }
} */

  import { Component} from '@angular/core';

  @Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.scss']
  })
  export class EmpleadoComponent {
  
    nombre = "efredy";
 
    /* llamaempresa(value:string) {
      
    } */
  }