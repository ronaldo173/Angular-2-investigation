import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html'
})
export class SimpleFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: FormControl): void {
    console.log('Bla bla bla, Submited form:', form.value);
    form.reset();
  }

}
