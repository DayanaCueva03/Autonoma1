import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users/users.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private usersService: UsersService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(7)]], // Aquí se añade la validación de mínimo 7 caracteres
    });
  }

  validateForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
      return;
    }
  
    // Si el formulario es válido, realiza la acción correspondiente
    this.onClickRegister();
  }
  
  onClickRegister(): void {
    if (this.form.invalid) {
      this.validateForm();
      return;
    }
  
    this.usersService.register(this.form.value)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  
  onClickLogin(): void {
    if (this.form.invalid) {
      this.validateForm();
      return;
    }
  
    this.usersService.login(this.form.value)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  
  onClickLoginGoogle(): void {
    this.usersService.loginWithGoogle()
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
}
