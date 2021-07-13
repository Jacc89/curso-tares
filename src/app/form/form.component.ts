import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  @Output() todoCreated: EventEmitter<Todo>;

  constructor() {
    this.todoCreated = new EventEmitter();
    this.formulario = new FormGroup({
      autor: new FormControl(),
      titulo: new FormControl(),
      descripcion: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.todoCreated.emit(this.formulario.value);
  }

}
