import { VeiculoService } from '../../service/veiculo.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITipoVeiculo } from 'src/app/types/interface.tipo-veiculo';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})

export class FormSelectComponent implements OnInit {
  tipoVeiculo: string = ""
  marcaVeiculo: string = ""
  modeloVeiculo: string = ""
  anoVeiculo: string = ""
  habilite: boolean = false
  marcas: ITipoVeiculo[] = [];
  modelos: ITipoVeiculo[] = [];
  anos: ITipoVeiculo[] = []

  constructor(private veiculoService: VeiculoService) { }
  ngOnInit(): void { }

  //disponobiliza as informações vindo da api para o arquivo pincipal
  @Output() modelo = new EventEmitter();
  @Output() valorFipe = new EventEmitter();
  @Output() marca = new EventEmitter();
  @Output() anoModelo = new EventEmitter();
  @Output() codigoFipe = new EventEmitter();
  @Output() mesReferencia = new EventEmitter();
  @Output() isHabilite = new EventEmitter();


  /**
   * função que obtem o retorno da api edisponibiliza para fazer a
   * busca da proxima informação no campo de busca na pagina principal
   * marca -> modelo-> ano-> toda informação do veiculo
   */
  obterMarcaVeiculo() {
    this.veiculoService.obterTipo(this.tipoVeiculo).subscribe(
      (ret) => { this.marcas = ret })
  }

  obterModeloVeiculo() {
    this.veiculoService.obterMarca(this.tipoVeiculo, this.marcaVeiculo).subscribe(
      (ret) => {
        Object.entries(ret).map(
          (data) => {
            if (data[0] == 'modelos') {
              this.modelos.push(data[1])
            };
          }
        );
      }
    )
  }

  obterAnoVeiculo() {
    this.veiculoService.obterModelo(this.tipoVeiculo, this.marcaVeiculo, this.modeloVeiculo).subscribe(
      (ret) => {
        Object.entries(ret).map(
          (data) => {
            this.anos.push(data[1]);
          }
        );
      }
    )
  }
  /**
   * retorna as informações completa do veiculo e envia para a pagina principal
   */

  obterVeiculo() {
    this.veiculoService.obterAno(this.tipoVeiculo, this.marcaVeiculo, this.modeloVeiculo, this.anoVeiculo).subscribe(
      (ret) => {

        this.valorFipe.emit(ret.Valor);
        this.modelo.emit(ret.Modelo);
        this.marca.emit(ret.Marca);
        this.anoModelo.emit(ret.AnoModelo);
        this.codigoFipe.emit(ret.CodigoFipe);
        this.mesReferencia.emit(ret.MesReferencia);
        this.isHabilite.emit(this.habilite = false)

      }
    )
  }
}
