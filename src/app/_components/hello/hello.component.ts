import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {
  name: string = 'n';
  message: string = '';

  sayHello(): void {
    this.message = 'hello ' + this.name;
    console.log(this.name);
  }
}
