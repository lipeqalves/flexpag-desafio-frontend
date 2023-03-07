import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

estilo: string = "desable"

  ngOnInit(): void {}

  @Input() isHabilite: boolean = true

  /**
   *
   * @returns habilita o botão apos receber as informação do veiculo da api e faz alteração na estilização do mesmo
   */
  Estilo(): string {
    return this.isHabilite === true ? this.estilo = "desable" : this.estilo = "enable"
  }

}
