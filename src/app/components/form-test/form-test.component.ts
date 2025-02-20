import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  imports: [ FormsModule ],
  templateUrl: './form-test.component.html'
})
export class FormTestComponent {

  nombre!:string
  invalid = false

  SubmitEventHandler () {
    if(this.nombre == null || this.nombre == ''){
      this.invalid = true
      return
    }
    this.invalid = false
    alert("El nombre ingresado es: " + this.nombre)
  }

  resetValidation () {
    this.invalid = false
  }

}
