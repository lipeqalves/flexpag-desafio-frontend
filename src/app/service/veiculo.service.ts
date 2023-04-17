import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IVeiculo } from '../model/interface.veiculo';
import { ITipoVeiculo } from '../model/interface.tipo-veiculo';

@Injectable({
  providedIn: 'root'
})

export class VeiculoService {
  API_PATH = "https://parallelum.com.br/fipe/api/v1/";

  constructor(private http: HttpClient) { }
  /**
   *
   * @param tipo carro, caminhao ou moto
   * @returns informação da marca do veiculo
   */
  obterTipo(tipo: string): Observable<ITipoVeiculo[]> {
    return this.http.get<ITipoVeiculo[]>(`${this.API_PATH}${tipo}/marcas`);
  }
  /**
   *
   * @param tipo
   * @param marca codigo da marca
   * @returns informação do modelo do veiculo
   */
  obterMarca(tipo: string, marca: string): Observable<ITipoVeiculo[]> {
    return this.http.get<ITipoVeiculo[]>(`${this.API_PATH}${tipo}/marcas/${marca}/modelos`);
  }
  /**
   *
   * @param tipo
   * @param marca
   * @param modelo codigo do modelo
   * @returns informmação do ano do veiculo
   */
  obterModelo(tipo: string, marca: string, modelo: string): Observable<ITipoVeiculo[]> {
    return this.http.get<ITipoVeiculo[]>(`${this.API_PATH}${tipo}/marcas/${marca}/modelos/${modelo}/anos`);
  }
  /**
   *
   * @param tipo
   * @param marca
   * @param modelo
   * @param anos codigo do ano
   * @returns informação completa do veiculo
   */
  obterAno(tipo: string, marca: string, modelo: string, anos: string): Observable<IVeiculo> {
    return this.http.get<IVeiculo>(`${this.API_PATH}${tipo}/marcas/${marca}/modelos/${modelo}/anos/${anos}`);
  }

}
