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
    swal('Ops', 'Bem-vindo ao SweetAlert2', 'success');
  }
}
