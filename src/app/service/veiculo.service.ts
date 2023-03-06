import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export interface ITipoVeiculo {
  nome: string,
  codigo: string
}

export interface IVeiculo {
AnoModelo: number,
CodigoFipe: string,
Marca: string,
MesReferencia: string,
Modelo: string,
SiglaCombustivel: string
TipoVeiculo: number,
Valor: string
}

@Injectable({
  providedIn: 'root'
})

export class VeiculoService {
  API_PATH = "https://parallelum.com.br/fipe/api/v1/";
  //https://parallelum.com.br/fipe/api/v1/{tipo do veículo}/marcas ok
  //https://parallelum.com.br/fipe/api/v1/{tipo do veículo}/marcas/{codigo da marca}/modelos/modelos ok
  //https://parallelum.com.br/fipe/api/v1/{tipo do veículo}/marcas/{código da marca}/modelos/{codigo do modelo}/anos
  //https://parallelum.com.br/fipe/api/v1/{tipo do veículo}/marcas/{código da marca}/modelos/{codigo do modelo}/anos/{codigo do ano}
  constructor(private http: HttpClient) { }
  obterTipo(tipo: string): Observable<ITipoVeiculo[]> {
    return this.http.get<ITipoVeiculo[]>(`${this.API_PATH}${tipo}/marcas`)
  }
  obterMarca(tipo: string, marca: string): Observable<ITipoVeiculo[]> {
    return this.http.get<ITipoVeiculo[]>(`${this.API_PATH}${tipo}/marcas/${marca}/modelos`)
  }

  obterModelo(tipo: string, marca: string, modelo: string): Observable<ITipoVeiculo[]> {
    return this.http.get<ITipoVeiculo[]>(`${this.API_PATH}${tipo}/marcas/${marca}/modelos/${modelo}/anos`)
  }

  obterAno(tipo: string, marca: string, modelo: string, anos: string): Observable<IVeiculo> {
    return this.http.get<IVeiculo>(`${this.API_PATH}${tipo}/marcas/${marca}/modelos/${modelo}/anos/${anos}`)
  }

}
