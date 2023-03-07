import { faBrazilianRealSign } from '@fortawesome/free-solid-svg-icons';
import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  faBrzilian = faBrazilianRealSign;

  ngOnInit(): void {}
/**
 * @param valor valor do veiculo digitato pelo usuario para
 *  fazer o calculo da variação percentual
 */
  @Input() valor: string = ""
  @Output() valorDoVeiculo = new EventEmitter();

  envia() {
    this.valorDoVeiculo.emit(this.valor);
  }
}
