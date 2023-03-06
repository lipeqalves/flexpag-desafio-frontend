import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-resultado',
  templateUrl: './card-resultado.component.html',
  styleUrls: ['./card-resultado.component.css']
})
export class CardResultadoComponent {

  @Input() valorVeiculo: string | undefined;
  @Input() percentual: string = "";
  @Input() valorDeReferencia: string = "";
  @Input() modelo: string = "";
  @Input() marca: string = "";
  @Input() anoModelo: string = "";
  @Input() mesReferencia: string = "";
  @Input() codigoFipe: string = "";
  @Input() isMediaFipe: boolean | undefined;
  @Input() isAcimaFipe: boolean | undefined;
  @Input() isAbaixoFipe: boolean | undefined;

}
