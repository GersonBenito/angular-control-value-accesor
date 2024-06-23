import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.scss'
})
export class FormRegisterComponent {

  public registerForm: FormGroup = new FormGroup({});

  initForm(){}

}
