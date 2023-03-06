import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  itens: string[] = []
  estilo: string = "desable"

  constructor() {

  }
  ngOnInit(): void {

  }

  @Input() isHabilite: boolean = true

  adiciona() {
    this.itens.push('item')
  }
  Estilo(): string {
    return this.isHabilite === true ? this.estilo = "desable" : this.estilo = "enable"
  }

}
