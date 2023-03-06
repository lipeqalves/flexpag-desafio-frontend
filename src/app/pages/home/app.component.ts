import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {

  }

  isAliveCard: boolean = false;
  isMediaFipe: boolean = false;
  isAbaixoFipe: boolean = false;
  isAcimaFipe: boolean = false;
  valorVeiculo: string = "";
  percentual: number = 0
  percebtualAbs: string = ""
  valorDeReferencia: string = ""
  modelo: string = ""
  marca: string = ""
  anoModelo: string = ""
  codigoFipe: string = ""
  mesReferencia: string = ""
  isHabilite: boolean = true;

  IsHabilite(evente: boolean) {
    this.isHabilite = evente
  }
  MesReferencia(evente: string) {
    this.mesReferencia = evente
  }
  CodigoFipe(evente: string) {
    this.codigoFipe = evente
  }
  AnoModelo(evente: string) {
    this.anoModelo = evente
  }
  Marca(evente: string) {
    this.marca = evente
  }

  Modelo(evente: string) {
    this.modelo = evente
  }
  valorReferencia(evente: string) {
    this.valorDeReferencia = evente
  }

  recebeValorDoVeiculo(evento: string) {
    const transforma = this.valorDeReferencia.split(" ").splice(1, 2).join("").replace(".", "")

    this.valorVeiculo = parseFloat(evento).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    this.percentual = ((((parseFloat(evento)) - parseFloat(transforma)) / parseFloat(transforma)) * 100)

    this.percebtualAbs = (Math.abs(this.percentual)).toFixed(2)

  }
  constructor() {

  }

  hideComponet() {
    this.isAliveCard === false ? this.isAliveCard = true : null;
    if (this.percentual >= 10) {
      this.isAcimaFipe = true
      this.isAbaixoFipe = false
      this.isMediaFipe = false
    } else if (this.percentual <= -10) {
      this.isAcimaFipe = false
      this.isAbaixoFipe = true
      this.isMediaFipe = false
    } else if (this.percentual >= -9.99 && this.percentual <= 9.99) {
      this.isAcimaFipe = false
      this.isAbaixoFipe = false
      this.isMediaFipe = true
    }

  }
}
