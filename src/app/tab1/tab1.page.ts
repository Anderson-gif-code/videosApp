import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { DadosService } from '../services/dados.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos';

  listaVideos: IFilme[] = [
    {
      nome: 'Jurassic World: Domínio (2022)',
      lancamento: '02/06/2022',
      duracao: '2h 27m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/w6Jz1AgjscqBuS8qXBd0wUHz5zC.jpg',
      generos: ['Aventura', 'Ação', 'Ficção científica'],
      pagina: '/jurassic-world'
    },
    {
      nome:'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 72,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/44aCR6cjH0FbzW6PMw3Ega178iW.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat'
    }
  ];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

    exibirFilme(filme: IFilme){
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }


  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 1500,
      color: 'success'
    });

    await toast.present();
  }

}

/*
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public alertController: AlertController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
*/

/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

}
*/
