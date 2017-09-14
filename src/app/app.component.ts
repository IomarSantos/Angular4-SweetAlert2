import { Component } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  private showMessages() {
    swal('Bem-Vindo', 'Ao SweetAlert2 component', 'success');
  }

  private errorMessage() {
    swal('Ops', 'Alguma coisa saiu errado', 'error');
  }
}
