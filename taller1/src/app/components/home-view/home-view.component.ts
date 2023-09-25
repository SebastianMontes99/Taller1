import { Component } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {
  imagenes = [
    { url: 'https://cinemarkla.modyocdn.com/uploads/8bae6491-bd3c-4f13-8555-2b9317c10cb1/original/BANNER_WEB_RECARGA_BARRILES_QR.png', descripcion: 'promo1' },
    { url: 'https://cinemarkla.modyocdn.com/uploads/0721e9ef-f84f-4b30-ae2e-c7eda3bac03f/original/BANNER-HOME-FC_inicio.png', descripcion: 'promo2' },
    { url:'https://cinemarkla.modyocdn.com/uploads/96cfa1de-1d10-47ff-9155-e019ba21c7f7/original/BANNER_MODO-FUN-CINEMARK_EXTERNOS_DESTOK_2844x786.jpg', descripcion: 'promo3'}
  ];

  indiceActual = 0;

  cambiarImagen(indice: number) {
    this.indiceActual = indice;
  }
}
