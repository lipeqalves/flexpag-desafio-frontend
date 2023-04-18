import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {

  }

  isHideShowCard: boolean = false;
  isMediaFipe: boolean = false;
  isAbaixoFipe: boolean = false;
  isAcimaFipe: boolean = false;
  valorVeiculo: string = "";
  percentual: number = 0
  percebtualAbs: string = ""
  valorFipe: string = ""
  modelo: string = ""
  marca: string = ""
  anoModelo: string = ""
  codigoFipe: string = ""
  mesReferencia: string = ""
  isHabilite: boolean = true;

  /**
   * habilita o botão de busca depois que as informações são obtidas pela api
   * @param isHabilite
   *
   */
  IsHabilite(evente: boolean) {
    this.isHabilite = evente;
  }
  /**
   * informaçãos do veiculo retornadas pela api
   * @param mesReferencia
   * @param codigoFipe
   * @param anoModelo
   * @param marca
   * @param modelo
   * @param valorFipe
   */
  MesReferencia(evente: string) {
    this.mesReferencia = evente;
  }
  CodigoFipe(evente: string) {
    this.codigoFipe = evente;
  }
  AnoModelo(evente: string) {
    this.anoModelo = evente;
  }
  Marca(evente: string) {
    this.marca = evente;
  }

  Modelo(evente: string) {
    this.modelo = evente;
  }
  ValorFipe(evente: string) {
    this.valorFipe = evente;
  }
  /**
   * transforma o valorFipe que esta no padrão : R$000.000,00 para um numero calculavel
   * @param transforma
   * valor do veiculo digitado no campo de busca pelo usuário, e trasformado para um numero calculavel
   * @param valorVeiculo
   * variação de aumento do percentual
   * @param percentual
   * valor absoluto da variação de aumento do percentual
   * @param percentualAbs
   */
  recebeValorDoVeiculo(evento: string) {
    const transforma = this.valorFipe.split(" ").splice(1, 2).join("").replace(".", "");

    this.valorVeiculo = parseFloat(evento).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    this.percentual = ((((parseFloat(evento)) - parseFloat(transforma)) / parseFloat(transforma)) * 100);

    this.percebtualAbs = (Math.abs(this.percentual)).toFixed(2);

  }
  /**
   * logica usada para esconder o card de informações
   * @param isHideShowCard
   * logica que verifica se o valor do veiculo pesquisado pelo usuario esta abixo
   * acima ou na media da tabea fipe de acordo com a variação percentual calculada
   * @param isAcimaFipe
   * @param isAbaixoFipe
   * @param isMediaFipe
   *
   */
  hideComponet() {
    this.isHideShowCard === false ? this.isHideShowCard = true : null;
    if (this.percentual >= 10) {
      this.isAcimaFipe = true;
      this.isAbaixoFipe = false;
      this.isMediaFipe = false;
    } else if (this.percentual <= -10) {
      this.isAcimaFipe = false;
      this.isAbaixoFipe = true;
      this.isMediaFipe = false;
    } else if (this.percentual >= -9.99 && this.percentual <= 9.99) {
      this.isAcimaFipe = false;
      this.isAbaixoFipe = false;
      this.isMediaFipe = true;
    }

  }
}
