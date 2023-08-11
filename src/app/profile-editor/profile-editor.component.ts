import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  // Validar todos los campos
  // Agregar password y confirmar password
  // Validar que los dos ambos sean iguales y que tengan datos.

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''], // Debe haber al menos dos palabras agregar como validación
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''], // Debe ser un estado de estados unidos.
      zip: [''], // 5 caracteres númericos
    }),
    aliases: this.fb.array([
      // Agregar un check
      this.fb.control(''), // Agregar otro campo al array para descripción
    ]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
