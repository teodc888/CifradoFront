import { Component, OnInit } from '@angular/core';
import { CifradoService } from 'src/app/services/cifrado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  encriptado: string = '';

  valueEncriptado: string = '';

  desEncriptado: string = '';

  valueDesEncriptado: string = '';

  constructor(private services: CifradoService) {}

  ngOnInit(): void {}

  getEncriptado(): void {
    this.services.getEncriptado(this.valueEncriptado).subscribe(
      (data) => console.log(data),
      (error) => (this.encriptado = error.error.text)
    );
  }

  getDesEncriptar(): void {
    this.services.getDesEncriptado(this.valueDesEncriptado).subscribe(
      (data) => console.log(data),
      (error) => (this.desEncriptado = error.error.text)
    );
  }
}
